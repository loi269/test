import "./App.css";
import { Route, Routes } from "react-router-dom";
import DangNhap from "./components/DangNhap";
import TrangChu from "./components/TrangChu";
import MainLayout from "./components/MainLayout";
import ChiTiet from "./components/ChiTiet";
import GioHang from "./components/GioHang";
import DangKy from "./components/DangKy";
import ChiTietKhachHang from "./components/ChiTietKhachHang";
import CapNhatKhachHang from "./components/CapNhatKhachHang";
import { AvatarProvider } from "../src/components/AvatarContext";
import SanPham from "./components/SanPham";
import { QuantityProvider } from "./components/QuantityContext";
import PaymentInfo from "./components/PaymentInfo";
import PaypalCancel from "./components/PaypalCancel";
import PaymentPaypal from "./components/PaymentPaypal";
import ThemSanPham from "./components/ThemSanPham";
import File404 from "./components/File404";
import OAuth2 from "./components/OAuth2";
import DanhSachNhapLieu from "./components/DanhSachNhapLieu";
import DataEntry from "./components/DataEntry";
import CapNhatSP from "./components/CapNhatSP";
import DataEntryUpdate from "./components/DataEntryUpdate";
import KhachHang from "./components/KhachHang";
import AdminKhachHang from "./components/AdminKhachHang";
import LichSuDatHang from "./components/LichSuDatHang";
import AdminCapNhatSP from "./components/AdminCapNhatSP";
import AdminSanPham from "./components/AdminSanPham";
import AdminThemMoiSanPham from "./components/AdminThemMoiSanPham";

function App() {
  return (
    <>
      <QuantityProvider>
        <AvatarProvider>
          <Routes>
            <Route path="/login" element={<DangNhap />} />
            <Route path="/register" element={<DangKy />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<TrangChu />} />
              <Route path="/oauth2" element={<OAuth2 />} />
              <Route path="/product/detail/:id" element={<ChiTiet />} />
              <Route path="/cart" element={<GioHang />} />
              <Route path="/product" element={<SanPham />} />
              <Route path="/customer/detail" element={<ChiTietKhachHang />} />
              <Route
                path="/admin/product-management"
                element={<AdminSanPham />}
              />
              <Route
                path="/admin/product-management/create"
                element={<AdminThemMoiSanPham />}
              />
              <Route
                path="/admin/product-management/detail/:id"
                element={<AdminCapNhatSP />}
              />
              <Route path="/admin/user-management" element={<KhachHang />} />
              <Route
                path="/admin/user-management/update/:id"
                element={<AdminKhachHang />}
              />
              <Route
                path="/admin/order-management"
                element={<LichSuDatHang />}
              />
              <Route
                path="/product/not-data"
                element={<DanhSachNhapLieu />}
              />
              <Route
                path="/product/data-entry/:id/:name/:img"
                element={<DataEntry />}
              />
              <Route
                path="/product/data-entry/update/:id/:name/:img"
                element={<DataEntryUpdate />}
              />
              <Route
                path="/customer/detail/update"
                element={<CapNhatKhachHang />}
              />
              <Route path="*" element={<File404 />} />
            </Route>
            <Route path="/payment-info" element={<PaymentInfo />} />
            <Route
              path="/paypal-success/:totalPayment/:customerName/:paymentDate/:paymentCode"
              element={<PaymentPaypal />}
            />
            <Route path="/paypal-error" element={<PaypalCancel />} />
          </Routes>
        </AvatarProvider>
      </QuantityProvider>
    </>
  );
}

export default App;
