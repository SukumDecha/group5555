const Footer = () => {
    return (
      <footer className="bg-[#133b5c]  text-white p-6 mt-10 w-full text-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          
          {/* โลโก้ */}
          <div className="flex items-center space-x-4">
            <img src="/image/logoSIT.png" alt="SIT Logo" className="h-10" />
          </div>
  
          {/* ข้อมูลติดต่อ */}
          <div className="text-sm mt-4 md:mt-0">
          <p className="text-sm">
            +662 470 9850 <br />
            126 ถนนประชาอุทิศ เขตบางมด เขตทุ่งครุ กรุงเทพฯ 10140 <br />
            webadmin@sit.kmutt.ac.th <br />
            @sit.kmutt
          </p>
          </div>
  
          {/* ลิงก์ SIT Website */}
          <div className="mt-4 md:mt-0">
            <a href="https://www.sit.kmutt.ac.th" className="text-white underline hover:text-blue-300">
              SIT WEBSITE
            </a>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;