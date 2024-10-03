const fs = require('fs');
const path = require('path');
const uploadConfig = require('../configs/upload');

class DiskStorage {
  async saveFile(file) {
    await fs.renameSync(
      /*.promises.rename*/ path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    );

    return file;
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

    try {
      await fs.statSync(/*.promises.stat*/ filePath);
    } catch {
      return;
    }

    await fs.unlinkSync(/*.promises.unlink*/ filePath);
  }
}

module.exports = DiskStorage;
