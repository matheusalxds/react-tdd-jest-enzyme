export const testAttr = (att) => process.env.NODE_ENV === 'production' ? {} : { 'data-test': att }
