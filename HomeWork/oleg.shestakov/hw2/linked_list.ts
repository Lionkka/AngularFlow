type LinkedList<T> = {prev: LinkedList<T>} & T & { next: LinkedList<T>}

