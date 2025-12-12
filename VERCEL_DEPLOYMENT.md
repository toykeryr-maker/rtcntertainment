# 🚀 Vercel Deployment Checklist

## ✅ การเตรียมก่อน Deploy

### 1. ตรวจสอบไฟล์ที่จำเป็น
- [x] `vercel.json` - Configuration สำหรับ Vercel
- [x] `.vercelignore` - ไฟล์ที่ไม่ต้องอัพโหลด
- [x] `.env.example` - ตัวอย่าง environment variables
- [x] `package.json` - Build scripts ที่ถูกต้อง

### 2. ตรวจสอบ Build Scripts
```json
{
  "scripts": {
    "build": "vite build",  // สำหรับ Vercel
    "build:server": "vite build && esbuild server/index.ts ...",  // สำหรับ full-stack
  }
}
```

### 3. ตรวจสอบ Vite Config
- Output directory: `dist/public` ✅
- Base path: `/` (default) ✅
- Build optimization: Code splitting ✅

## 📋 ขั้นตอนการ Deploy

### Option 1: Deploy ผ่าน Vercel Dashboard (แนะนำ)

1. **Push code ขึ้น GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **เข้า Vercel Dashboard**
   - ไปที่ https://vercel.com/new
   - เลือก repository ของคุณ
   - กด "Import"

3. **Configure Project**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (default)
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `pnpm install`

4. **Environment Variables (Optional)**
   ```
   VITE_ANALYTICS_ENDPOINT=https://your-analytics.com
   VITE_ANALYTICS_WEBSITE_ID=your-website-id
   ```

5. **Deploy!**
   - กด "Deploy"
   - รอ 2-5 นาที
   - เสร็จแล้ว! 🎉

### Option 2: Deploy ผ่าน Vercel CLI

```bash
# ติดตั้ง Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔧 การแก้ไขปัญหา

### ปัญหา: Build Failed
**สาเหตุ:** Dependencies ไม่ครบ
**วิธีแก้:**
1. ลบ `node_modules` และ `pnpm-lock.yaml`
2. รัน `pnpm install` ใหม่
3. ทดสอบ build ในเครื่อง: `pnpm build`

### ปัญหา: 404 Not Found เมื่อ Refresh หน้า
**สาเหตุ:** SPA routing ไม่ทำงาน
**วิธีแก้:** ตรวจสอบว่ามี `vercel.json` และมี rewrites configuration ✅

### ปัญหา: Environment Variables ไม่ทำงาน
**สาเหตุ:** ไม่ได้ตั้งค่าใน Vercel Dashboard
**วิธีแก้:**
1. ไปที่ Project Settings > Environment Variables
2. เพิ่ม variables ที่จำเป็น
3. Redeploy

### ปัญหา: Assets ไม่โหลด
**สาเหตุ:** Path ไม่ถูกต้อง
**วิธีแก้:** ใช้ relative path หรือ `/` prefix สำหรับ assets

## 📊 หลัง Deploy

### ตรวจสอบ
- [ ] เว็บไซต์เปิดได้ปกติ
- [ ] Navigation ทำงานถูกต้อง
- [ ] Images/Assets โหลดครบ
- [ ] Responsive design ทำงานดี
- [ ] Performance ดี (ใช้ Lighthouse ตรวจสอบ)

### Custom Domain (Optional)
1. ไปที่ Project Settings > Domains
2. เพิ่ม domain ของคุณ
3. ตั้งค่า DNS ตามที่ Vercel แนะนำ
4. รอ DNS propagate (5-48 ชั่วโมง)

## 🎯 Performance Tips

1. **Enable Compression** - Vercel ทำให้อัตโนมัติ ✅
2. **Image Optimization** - ใช้ WebP format
3. **Code Splitting** - ตั้งค่าใน `vite.config.ts` แล้ว ✅
4. **Caching** - ตั้งค่าใน `vercel.json` แล้ว ✅

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

**หมายเหตุ:** โปรเจคนี้ถูกตั้งค่าให้ deploy เป็น Static Site บน Vercel แล้ว ไม่ต้องกังวลเรื่อง server-side code
