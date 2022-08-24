
cd /home/bemootzer/promotion/research/projects/pollen_app/app/pollenyzer/
npm run build
cp -r /home/bemootzer/promotion/research/projects/pollen_app/app/pollenyzer/dist/* /home/bemootzer/promotion/research/projects/pollen_app/app/pollenyzer.github.io/
cd /home/bemootzer/promotion/research/projects/pollen_app/app/pollenyzer.github.io/
git add .
git commit -m "publish"
git push
