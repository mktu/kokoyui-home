import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGES_DIR = './public/images';
const MAX_WIDTH = 1200; // 最大幅
const QUALITY = 80; // JPEG/WebP品質

async function optimizeImages() {
  const files = fs.readdirSync(IMAGES_DIR);

  for (const file of files) {
    if (!file.endsWith('.png') && !file.endsWith('.jpg') && !file.endsWith('.jpeg')) {
      continue;
    }

    const inputPath = path.join(IMAGES_DIR, file);
    const outputPath = path.join(IMAGES_DIR, file.replace(/\.(png|jpg|jpeg)$/, '.webp'));

    try {
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024 / 1024).toFixed(2);

      // 画像をWebPに変換＆リサイズ
      await sharp(inputPath)
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024).toFixed(0);

      console.log(`✓ ${file}: ${originalSize}MB → ${newSize}KB`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  console.log('\n最適化完了！');
  console.log('コンポーネント内の画像パスを .png → .webp に変更してください。');
}

optimizeImages();
