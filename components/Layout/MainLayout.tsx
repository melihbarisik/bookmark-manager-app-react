"use client"

import { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeSidebar, openSidebar } from '@/store/slices/SidebarSlice';
import styles from './MainLayout.module.scss';
import Sidebar from '../Sidebar/Sidebar'; // Sidebar bileşeninin yolu

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector((state) => state.sidebarSlice);

  useEffect(() => {
    const handleResize = () => {
      // 768px altındaysa otomatik kapat
      if (window.innerWidth < 768) {
        dispatch(closeSidebar());
      } else {
        dispatch(openSidebar());
      }
    };

    // İlk yüklemede ve her resize işleminde çalıştır
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <div className={styles.layoutContainer}>
      {/* Sidebar'a 'closed' class'ını state'e göre veriyoruz */}
      <aside className={`${styles.sidebar} ${!isSidebarOpen ? styles.closed : ''}`}>
        <Sidebar />
      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>

      {/* Mobil için Overlay: Sidebar açıkken arkaya tıklandığında kapansın */}
      {isSidebarOpen && window.innerWidth < 768 && (
        <div className={styles.overlay} onClick={() => dispatch(closeSidebar())} />
      )}
    </div>
  );
};

export default MainLayout;