class DomRemovalObserver {
  constructor(targetNode, removalHandler) {
    this.targetNode = targetNode;
    this.removalHandler = removalHandler;
    this.observer = new MutationObserver(this.mutationHandler);
  }

  start = () => {
    this.observer.observe(this.targetNode, { childList: true, subtree: true });
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

  disconnect = () => {
    this.observer.disconnect();
  }
}

export default DomRemovalObserver;
