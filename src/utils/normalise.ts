export const urlifyName = (name: string) => {
    return name.split(' ').join('_').toLocaleLowerCase();
};
