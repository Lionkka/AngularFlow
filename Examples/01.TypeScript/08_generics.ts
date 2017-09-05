function useGenerics<T>(age: T): void{
    console.log(age);
}

function genericWithRestriction<T extends string | number>(age: T): void {
    console.log(age);
}

useGenerics<string>('my age');
genericWithRestriction<number>(12);
