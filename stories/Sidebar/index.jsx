import { useEffect, useState } from "react";

import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineSquares2X2,
  HiOutlineHeart,
  HiOutlineBell,
  HiOutlineClock,
  HiOutlineCog6Tooth,
  HiOutlinePlus,
} from "react-icons/hi2";

import styles from "./index.module.scss";

export const Sidebar = ({ open }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div className={`${styles.Sidebar} ${isOpen && styles.SidebarOpen}`}>
      <div
        className={styles.Sidebar__toggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiOutlineChevronLeft /> : <HiOutlineChevronRight />}
      </div>
      <div className={styles.Sidebar__profile}>
        <img
          src="https://github.com/05akalan57.png"
          className={styles.Sidebar__avatar}
        />
        <div className={styles.Sidebar__info}>
          <div className={styles.Sidebar__job}>Yazılım Geliştirici</div>
          <div className={styles.Sidebar__name}>Muhammet Emin</div>
        </div>
      </div>
      <div className={styles.Sidebar__content}>
        <div className={styles.Sidebar__divider} />
        <div className={styles.Sidebar__menu}>
          <div className={styles.Sidebar__title}>Genel</div>
          <div className={styles.Sidebar__items}>
            <div
              className={`${styles.Sidebar__item} ${styles.Sidebar__active}`}
            >
              <div className={styles.Sidebar__icon}>
                <HiOutlineSquares2X2 />
              </div>
              <div className={styles.Sidebar__text}>Kategoriler</div>
              <div className={styles.Sidebar__tooltip}>Kategoriler</div>
            </div>
            <div className={styles.Sidebar__item}>
              <div className={styles.Sidebar__icon}>
                <HiOutlineHeart />
              </div>
              <div className={styles.Sidebar__text}>Favoriler</div>
              <div className={styles.Sidebar__tooltip}>Favoriler</div>
            </div>

            <div className={styles.Sidebar__item}>
              <div className={styles.Sidebar__icon}>
                <HiOutlineBell />
              </div>
              <div className={styles.Sidebar__text}>Bildirimler</div>
              <div className={styles.Sidebar__tooltip}>Bildirimler</div>
            </div>
          </div>
        </div>
        <div className={styles.Sidebar__divider} />
        <div className={styles.Sidebar__menu}>
          <div className={styles.Sidebar__title}>DİĞER</div>
          <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__item}>
              <div className={styles.Sidebar__icon}>
                <HiOutlineClock />
              </div>
              <div className={styles.Sidebar__text}>Geçmiş</div>
              <div className={styles.Sidebar__tooltip}>Geçmiş</div>
            </div>
            <div className={styles.Sidebar__item}>
              <div className={styles.Sidebar__icon}>
                <HiOutlineCog6Tooth />
              </div>
              <div className={styles.Sidebar__text}>Ayarlar</div>
              <div className={styles.Sidebar__tooltip}>Ayarlar</div>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${styles.Sidebar__add}`}>
        <div className={styles.Sidebar__icon}>
          <HiOutlinePlus />
        </div>
        <div className={styles.Sidebar__text}>Ekle</div>
      </div>
    </div>
  );
};
