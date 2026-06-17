# Happy Birthday, Dudu 🤍

A private, password-protected birthday website built with Vite + React.

## What's inside
- **Password gate** (`src/PasswordGate.jsx`) — a wax-seal envelope that opens only with the code `1811`.
- **Birthday message** (`src/Hero.jsx`) — "Happy Birthday my world, Hubby Dudu & Sandeep Acharya."
- **Photo gallery** (`src/Gallery.jsx`) — polaroid-style cards for your couple photos.
- **Closing note** (`src/Closing.jsx`) — a small sign-off.
- Cherry-red matte color theme throughout, defined in `src/index.css`.

## Run it locally
```bash
npm install
npm run dev
```
Then open the local URL it prints (usually http://localhost:5173).

## Add your real photos
1. Put your image files into `public/photos/` (create the folder), e.g. `public/photos/us-1.jpg`.
2. Open `src/Gallery.jsx`. Each entry in the `polaroids` array currently looks like:
   ```js
   { caption: 'us, always', rotate: -6 }
   ```
   Add an `image` field pointing to your file:
   ```js
   { caption: 'us, always', rotate: -6, image: '/photos/us-1.jpg' }
   ```
3. In the same file, inside the `.polaroid-photo` div, replace the placeholder heart with:
   ```jsx
   {p.image
     ? <img src={p.image} alt={p.caption} className="polaroid-img" />
     : <><HeartDoodle /><span className="polaroid-hint">your photo here</span></>}
   ```
4. Add this to `src/Gallery.css` so photos fill the frame nicely:
   ```css
   .polaroid-img {
     width: 100%;
     height: 100%;
     object-fit: cover;
     border-radius: 1px;
   }
   ```

You can have anywhere from 1 to as many photos as you like — just add or remove entries in the `polaroids` array.

## Change the password
Open `src/PasswordGate.jsx` and edit:
```js
const CORRECT_CODE = '1811';
```

## Change the cute hint text
In the same file, edit this line:
```jsx
<p className="seal-hint">psst — you know this one by heart 💕</p>
```

## Build for deployment
```bash
npm run build
```
This outputs a static site to `dist/`. You can host that folder on Netlify, Vercel, GitHub Pages, or any static host — drag-and-drop the `dist` folder onto Netlify's deploy page is the fastest option.
