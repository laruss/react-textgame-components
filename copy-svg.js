const fs = require('fs');
const path = require('path');

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
const destDirCJS = `./dist/cjs${commonPath}`;
const destDirESM = `./dist/esm${commonPath}`;
const fileExtension = '.svg';

copyFiles(srcDir, destDirCJS, fileExtension);
copyFiles(srcDir, destDirESM, fileExtension);
