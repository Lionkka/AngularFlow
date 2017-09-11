//  ## Homework 2 ##
/* 1 - Implement Mixin for Disposable, Deletable, Readable {isReadOnly}.
 Class should contains property value: string. If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id readonly it can't be changed.*/

import Disposable from 'mixins/desposable';
import Deletable from 'mixins/deletable';
import Readable from 'mixins/readable';

class myMixins implements Deletable, Disposable, Readable{
	myDisposable: () => void
	myDeletable: () => void
	myReadable: () => void
}

