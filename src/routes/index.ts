
import fs from 'fs';

const routes = async (app: any) => {
    console.log(app,'log app router')
    const fileNames = fs.readdirSync('src/routes');
    console.log(fileNames,'file name route index')
    for (let i = 0; i < fileNames.length; i++) {
        const fileName = fileNames[i];
        if (
            fileName !== 'index.ts' &&
            fileName !== 'index.js' &&
            (['ts'].indexOf(fileName.split('.').pop()) !== -1 || ['js'].indexOf(fileName.split('.').pop()) !== -1)
        ) {
            const route = await import(`./${fileName.split('.')[0]}`);
            console.log(route,'router import')
            app.use('/api/v1/', route.default);
        }
    }
};

export default routes;
