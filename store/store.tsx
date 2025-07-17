import { Banner } from "@/types/types";
import { create } from "zustand";

interface AppStates {
  hovered: string;
  setHovered: (value: string) => void;
  menuOpen: boolean;
  setMenuOpen: (data: boolean) => void;
  showServices: boolean;
  setShowServices: (data: boolean) => void;
  showIndustries: boolean;
  setShowIndustries: (data: boolean) => void;
  showInsight: boolean;
  setShowInsight: (data: boolean) => void;
  showAbout: boolean;
  setShowAbout: (data: boolean) => void;
  showInvestors: boolean;
  setShowInvestors: (data: boolean) => void;
  isCreateServiceModalOpen: boolean;
  setIsCreateServiceModalOpen: (data: boolean) => void;
  isEditServiceModalOpen: boolean;
  setIsEditServiceModalOpen: (data: boolean) => void;
  isDeleteServiceModalOpen: boolean;
  setIsDeleteServiceModalOpen: (data: boolean) => void;
  isEditLogoModalOpen: boolean;
  setIsEditLogoModalOpen: (data: boolean) => void;
  isDeleteLogoModalOpen: boolean;
  setIsDeleteLogoModalOpen: (data: boolean) => void;
  isCreateBannerModalOpen: boolean;
  setIsCreateBannerModalOpen: (data: boolean) => void;
  isEditBannerModalOpen: boolean;
  setIsEditBannerModalOpen: (data: boolean) => void;
  isDeleteBannerModalOpen: boolean;
  setIsDeleteBannerModalOpen: (data: boolean) => void;
  isCreateAnInsightModalOpen: boolean;
  setIsCreateAnInsightModalOpen: (data: boolean) => void;
  isEditAnInsightModalOpen: boolean;
  setIsEditAnInsightModalOpen: (data: boolean) => void;
  isDeleteAnInsightModalOpen: boolean;
  setIsDeleteAnInsightModalOpen: (data: boolean) => void;
  banners: Banner[];
  setBanners: (banners: Banner[]) => void;
  selectedBanner: null | Banner;
  setSelectedBanner: (banner: Banner | null) => void;

  isLogoutModalOpen: boolean;
  setIsLogoutModalOpen: (data: boolean) => void;
}

const useAppStore = create<AppStates>((set) => ({
  hovered: "",
  setHovered: (value: string) => set({ hovered: value }),
  menuOpen: false,
  setMenuOpen: (data: boolean) => set({ menuOpen: data }),
  showServices: false,
  setShowServices: (data: boolean) => set({ showServices: data }),
  showIndustries: false,
  setShowIndustries: (data: boolean) => set({ showIndustries: data }),
  showInsight: false,

  setShowInsight: (data: boolean) => set({ showInsight: data }),
  showAbout: false,

  setShowAbout: (data: boolean) => set({ showAbout: data }),
  showInvestors: false,

  setShowInvestors: (data: boolean) => set({ showInvestors: data }),

  isCreateServiceModalOpen: false,
  setIsCreateServiceModalOpen: (data: boolean) =>
    set({ isCreateServiceModalOpen: data }),
  isEditServiceModalOpen: false,
  setIsEditServiceModalOpen: (data: boolean) =>
    set({ isEditServiceModalOpen: data }),

  isDeleteServiceModalOpen: false,
  setIsDeleteServiceModalOpen: (data: boolean) =>
    set({ isDeleteServiceModalOpen: data }),

  isEditLogoModalOpen: false,
  setIsEditLogoModalOpen: (data: boolean) => set({ isEditLogoModalOpen: data }),
  isDeleteLogoModalOpen: false,
  setIsDeleteLogoModalOpen: (data: boolean) =>
    set({ isDeleteLogoModalOpen: data }),

  isCreateBannerModalOpen: false,
  setIsCreateBannerModalOpen: (data: boolean) =>
    set({ isCreateBannerModalOpen: data }),
  isEditBannerModalOpen: false,
  setIsEditBannerModalOpen: (data: boolean) =>
    set({ isEditBannerModalOpen: data }),

  isDeleteBannerModalOpen: false,
  setIsDeleteBannerModalOpen: (data: boolean) =>
    set({ isDeleteBannerModalOpen: data }),
  isCreateAnInsightModalOpen: false,
  setIsCreateAnInsightModalOpen: (data: boolean) =>
    set({ isCreateAnInsightModalOpen: data }),
  isEditAnInsightModalOpen: false,
  setIsEditAnInsightModalOpen: (data: boolean) =>
    set({ isEditAnInsightModalOpen: data }),
  isDeleteAnInsightModalOpen: false,
  setIsDeleteAnInsightModalOpen: (data: boolean) =>
    set({ isDeleteAnInsightModalOpen: data }),

  banners: [],
  setBanners: (banners) => set({ banners }),

  selectedBanner: null,
  setSelectedBanner: (banner) => set({ selectedBanner: banner }),

  isLogoutModalOpen: false,
  setIsLogoutModalOpen: (data: boolean) => set({ isLogoutModalOpen: data }),
}));

export default useAppStore;
