import fs from 'fs';
import path from 'path';

const copyFiles = (srcDir, destDir, fileExtension) => {
    fs.readdir(srcDir, (err, files) => {
        if (err) {
            console.error('Error finding files: ' + err);
            return;
        }

        files.forEach(file => {
            if (file.endsWith(fileExtension)) {
                const srcPath = path.join(srcDir, file);
                const destPath = path.join(destDir, file);
                fs.copyFile(srcPath, destPath, (err) => {
                    if (err) {
                        console.error('Error copying file: ' + err);
                    }
                });
            }
        });
    });
};

const commonPath = '/components/GImage';
const srcDir = `./src${commonPath}`;
const destDir = `./dist/${commonPath}`;
const fileExtension = '.svg';

copyFiles(srcDir, destDir, fileExtension);
