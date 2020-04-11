class DomRemovalObserver {
  constructor(targetNode, removalHandler) {
    this.targetNode = targetNode;
    this.removalHandler = removalHandler;
    this.observer = new MutationObserver(this.mutationHandler);
  }

  mutationHandler = (mutationList, observer) => {
    mutationList.forEach(mutation => {
      if (mutation.type === 'childList' && mutation.removedNodes.length !== 0) {
        mutation.removedNodes.forEach(node => {
          this.removalHandler(node);
        });
      }
    });
  }

  start() {
    this.observer.observe(this.targetNode, { childList: true, subtree: true });
  }
}

export default DomRemovalObserver;
