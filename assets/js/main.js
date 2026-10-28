/*=============== SHOW / HIDE MOBILE MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

/* Close mobile menu when a link is clicked */
const navLinks = document.querySelectorAll('.nav__link, .nav__contact');
navLinks.forEach(link => {
   link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
});

/*=============== TYPED JS (Hero Roles) ===============*/
if (document.getElementById('typed-text')) {
   new Typed('#typed-text', {
      strings: ['Game Developer', 'Back-End Developer', '3D Modeler'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true
   });
}

/*=============== SHOW SCROLL UP BUTTON ===============*/
const scrollUp = () => {
   const scrollUpBtn = document.getElementById('scroll-up');
   if (window.scrollY >= 350) {
      scrollUpBtn.classList.add('show-scroll');
   } else {
      scrollUpBtn.classList.remove('show-scroll');
   }
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SPY ACTIVE LINK ===============*/
const navSectionLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
   const scrollY = window.scrollY;
   const atPageBottom = (window.innerHeight + Math.round(scrollY)) >= document.body.offsetHeight - 60;

   if (atPageBottom) {
      navSectionLinks.forEach(l => l.classList.remove('active-link'));
      const contactLink = document.querySelector('.nav__link[href="#contact"]');
      if (contactLink) contactLink.classList.add('active-link');
      return;
   }

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

      if (matchingLink && scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
         navSectionLinks.forEach(l => l.classList.remove('active-link'));
         matchingLink.classList.add('active-link');
      }
   });
}

window.addEventListener('scroll', scrollActive);
window.addEventListener('load', scrollActive);

/*=============== CREATIVE ALBUMS GALLERY MODAL ===============*/
const ALBUM_DATA = {
   models: {
      title: '3D Models Compilation',
      items: [
         {
            src: 'assets/img/albums/Mod_Pizza.jpg',
            fallback: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
            caption: 'Random modelling with lighting practice and HDRI'
         },
         {
            src: 'assets/img/albums/Mod_Crates.jpg',
            fallback: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80',
            caption: 'Crate Modelling with Textures'
         },
         {
            src: 'assets/img/albums/Mod_Bonsai.jpg',
            fallback: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80',
            caption: 'Simple Bonsai Model with 2D Leaves'
         },
         {
            src: 'assets/img/albums/Mod_Lamp.jpg',
            fallback: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80',
            caption: 'Simple Lampshelf model'
         }
      ]
   },
   rigging: {
      title: 'Character & Prop Rigging',
      items: [
         {
            src: 'assets/img/albums/Rig_KniMC_01.png',
            fallback: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
            caption: 'Kulay ng Isip Player Rig and Skinweight'
         },
                  {
            src: 'assets/img/albums/Rig_KniMC_02.jpg',
            fallback: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
            caption: 'Kulay ng Isip Player Rig in wireframe mode'
         },
                  {
            src: 'assets/img/albums/Rig_Blobboss_01.png',
            fallback: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
            caption: 'Kulay ng Isip Blob boss Rig and Skinweight'
         },
                  {
            src: 'assets/img/albums/Rig_Blobboss_02.png',
            fallback: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
            caption: 'Kulay ng Isip Blob boss Rig in wireframe mode'
         },
                  {
            src: 'assets/img/albums/Rig_PencilBoss_01.png',
            fallback: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
            caption: 'Kulay ng Isip Pencil boss Rig and Skinweight'
         },
                  {
            src: 'assets/img/albums/Rig_PaintBucket_01.png',
            fallback: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
            caption: 'Kulay ng Isip PaintBucket boss Rig and Skinweight'
         },
                  {
            src: 'assets/img/albums/Rig_PaintBucket_02.png',
            fallback: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
            caption: 'Kulay ng Isip PaintBucket boss Rig in wireframe mode'
         }
      ]
   },
   animation: {
      title: '3D Animation Reels & Cycles',
      items: [
         {
            src: 'assets/img/albums/anim-1.jpg',
            fallback: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80',
            caption: 'Character walk & combat animation keyframing'
         }
      ]
   },
   kulayngisip: {
      title: 'Kulay ng Isip Backend Systems',
      items: [
         {
            src: 'assets/img/albums/KNI_01.png',
            fallback: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
            caption: 'All Enemy AI related backend system'
         },
         {
            src: 'assets/img/albums/KNI_04.png',
            fallback: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
            caption: 'All Enemy AI related backend system in Unity view'
         },
         {
            src: 'assets/img/albums/KNI_05.png',
            fallback: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
            caption: 'All Boss AI related backend system in Unity view'
         },
         {
            src: 'assets/img/albums/KNI_02.png',
            fallback: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
            caption: 'All player related scripts'
         },
         {
            src: 'assets/img/albums/KNI_03.png',
            fallback: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
            caption: 'All animation controllers for Player and NPC/Enemies in the game world'
         }
      ]
   }
};

const galleryModal = document.getElementById('gallery-modal');
const galleryOverlay = document.getElementById('gallery-overlay');
const galleryClose = document.getElementById('gallery-close');
const galleryTitle = document.getElementById('gallery-title');
const galleryWrapper = document.getElementById('gallery-swiper-wrapper');
let gallerySwiperInstance = null;

function openAlbumModal(albumKey) {
   const album = ALBUM_DATA[albumKey];
   if (!album) return;

   galleryTitle.textContent = album.title;

   /* Build slides (supports both images and .mp4/.webm videos) */
   galleryWrapper.innerHTML = album.items.map(item => {
      const isVideo = /\.(mp4|webm)$/i.test(item.src);
      const mediaTag = isVideo
         ? `<video src="${item.src}" controls class="gallery-slide__media"></video>`
         : `<img src="${item.src}" alt="${item.caption}" class="gallery-slide__media" onerror="this.src='${item.fallback || ''}'">`;

      return `
         <div class="swiper-slide gallery-slide">
            ${mediaTag}
            <p class="gallery-slide__caption">${item.caption}</p>
         </div>
      `;
   }).join('');

   galleryModal.classList.add('is-open');
   document.body.style.overflow = 'hidden';

   if (gallerySwiperInstance) {
      gallerySwiperInstance.destroy(true, true);
   }

   gallerySwiperInstance = new Swiper('.gallery-swiper', {
      loop: album.items.length > 1,
      spaceBetween: 16,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true
      },
      keyboard: {
         enabled: true
      }
   });
}

function closeAlbumModal() {
   galleryModal.classList.remove('is-open');
   document.body.style.overflow = '';
}

document.querySelectorAll('.album__card').forEach(card => {
   card.addEventListener('click', () => {
      openAlbumModal(card.dataset.album);
   });
});

/*=============== PROJECT CARD HOVER PREVIEW CYCLER (HTML-DRIVEN) ===============*/
document.querySelectorAll('.work__card').forEach(card => {
   const imgWrap = card.querySelector('.work__img-wrap');
   const barsWrap = card.querySelector('.work__hover-bars');
   const cardTitle = card.querySelector('.work__title')?.textContent || 'Project Preview';
   if (!imgWrap) return;

   /* Remove any extra hover images that haven't been uploaded to the folder yet */
   const allMedia = Array.from(imgWrap.querySelectorAll('.work__img'));
   allMedia.forEach((media, idx) => {
      if (idx > 0 && media.tagName === 'IMG') {
         media.addEventListener('error', () => {
            media.remove();
            rebuildBars();
         });
      }
   });

   let hoverTimer = null;
   let currentIndex = 0;

   function getValidMedia() {
      return Array.from(imgWrap.querySelectorAll('.work__img'));
   }

   function rebuildBars() {
      const mediaList = getValidMedia();
      if (barsWrap) {
         barsWrap.innerHTML = mediaList.length > 1
            ? mediaList.slice(1).map(() => `<span class="work__bar-dot"></span>`).join('')
            : '';
      }
   }

   function showMediaAt(index) {
      const mediaList = getValidMedia();
      mediaList.forEach((el, idx) => {
         const active = idx === index;
         el.classList.toggle('is-active', active);
         if (el.tagName === 'VIDEO') {
            if (active) el.play().catch(() => {});
            else { el.pause(); el.currentTime = 0; }
         }
      });

      if (barsWrap) {
         barsWrap.querySelectorAll('.work__bar-dot').forEach((dot, idx) => {
            dot.classList.toggle('is-active', idx === index - 1);
         });
      }
   }

   rebuildBars();
   showMediaAt(0);

   /* On Hover: immediately show screenshot #2 (index 1) and cycle every 1.4s */
   card.addEventListener('mouseenter', () => {
      const mediaList = getValidMedia();
      if (mediaList.length <= 1) return;

      currentIndex = 1;
      showMediaAt(currentIndex);

      hoverTimer = setInterval(() => {
         const currentList = getValidMedia();
         currentIndex++;
         if (currentIndex >= currentList.length) currentIndex = 1;
         showMediaAt(currentIndex);
      }, 1400);
   });

   /* On Mouse Leave: stop timer and return to Cover Image (index 0) */
   card.addEventListener('mouseleave', () => {
      clearInterval(hoverTimer);
      currentIndex = 0;
      showMediaAt(0);
   });

   /* On Click: open all images from this card in the Swiper Lightbox Modal */
   card.addEventListener('click', () => {
      const mediaList = getValidMedia();
      if (!mediaList.length || !galleryModal) return;

      galleryTitle.textContent = cardTitle;
      galleryWrapper.innerHTML = mediaList.map(el => {
         const src = el.getAttribute('src');
         const caption = el.getAttribute('alt') || cardTitle;
         const isVideo = el.tagName === 'VIDEO' || /\.(mp4|webm)$/i.test(src);
         const mediaTag = isVideo
            ? `<video src="${src}" controls class="gallery-slide__media"></video>`
            : `<img src="${src}" alt="${caption}" class="gallery-slide__media">`;

         return `
            <div class="swiper-slide gallery-slide">
               ${mediaTag}
               <p class="gallery-slide__caption">${caption}</p>
            </div>
         `;
      }).join('');

      galleryModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';

      if (gallerySwiperInstance) gallerySwiperInstance.destroy(true, true);
      gallerySwiperInstance = new Swiper('.gallery-swiper', {
         loop: mediaList.length > 1,
         spaceBetween: 16,
         navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
         pagination: { el: '.swiper-pagination', clickable: true },
         keyboard: { enabled: true }
      });
   });
});

if (galleryClose) galleryClose.addEventListener('click', closeAlbumModal);
if (galleryOverlay) galleryOverlay.addEventListener('click', closeAlbumModal);
window.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && galleryModal.classList.contains('is-open')) {
      closeAlbumModal();
   }
});