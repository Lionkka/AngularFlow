function overloadedFunction(): string;
function overloadedFunction(name:string): string;
function overloadedFunction(name:string, secondName:string):string;

function overloadedFunction(name?: string, secondName?: string):string{
    if(name){
        return 'Stranger';
    } else {
        return name + secondName;
    }
}

overloadedFunction('str', 'str')