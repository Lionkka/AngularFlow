import { Smartable } from './Smartable';

var sdispose = new Smartable();
var sdelete = new Smartable();
var sread = new Smartable();

console.log('Value: ' + sdispose.Value);
sdispose.Dispose();
console.log('Value: ' + sdispose.Value);

console.log('Value: ' + sdelete.Value);
sdelete.Delete();
console.log('Value: ' + sdelete.Value);

console.log('Value: ' + sread.Value);
sread.Value = 'readonly';
sread.ReadOnly();
sread.Value = 'changed ';
console.log('Value: ' + sread.Value);
