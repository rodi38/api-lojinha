export const hasEmptyValues = (obj)=>{
    return Object.values(obj).some(
        (value) => value === null || value === undefined || value === ''
      );
    
}