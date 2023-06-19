const route = [
    {
        id: 1,
        name: 'Xã hội',
        link: "/xa-hoi",
        rssLink: "https://tienphong.vn/rss/xa-hoi-2.rss",
    },
    {
        id: 2,
        name: 'Kinh tế',
        link: "/kinh-te",
        rssLink: "https://tienphong.vn/rss/kinh-te-3.rss",
    },
    {
        id: 3,
        name: 'Địa ốc',
        link: "/dia-oc",
        rssLink: "https://tienphong.vn/rss/dia-oc-166.rss",
        // dropdown: [
        //     {
        //         id: 1,
        //         name: 'Đô thị',
        //         link: "do-thi",
        //     },
        //     {
        //         id: 2,
        //         name: 'Thị trường',
        //         link: "thi-truong",
        //     },
        //     {
        //         id: 3,
        //         name: 'Nhà đẹp',
        //         link: "nha-dep",
        //     },
        //     {
        //         id: 4,
        //         name: 'Tư vấn',
        //         link: "tu-van",
        //     },
        //     {
        //         id: 5,
        //         name: 'Dự án',
        //         link: "du-an",
        //     },
        // ]
    },
    {
        id: 4,
        name: 'Sức khoẻ',
        link: "/suc-khoe",
        rssLink: "https://tienphong.vn/rss/suc-khoe-210.rss",
        dropdown: [
            {
                id: 1,
                name: 'Bác sĩ online',
                link: "bac-si-online",
            },
            {
                id: 2,
                name: 'Thuốc dùng  - Thuốc tốt',
                link: "thuoc-dung-thuoc-tot",
            },
            {
                id: 3,
                name: 'Làm đẹp mỗi ngày',
                link: "lam-dep-moi-ngay",
            },
            {
                id: 4,
                name: 'Thì thầm bên gối',
                link: "thi-tham-ben-goi",
            },
        ]
    },
    {
        id: 5,
        name: 'Thế giới',
        link: "/the-gioi",
        rssLink: "https://tienphong.vn/rss/the-gioi-5.rss",
        dropdown: [
            {
                id: 1,
                name: 'Phân tích -  Bình luận',
                link: "phan-tich-biinh-luan",
            },
            {
                id: 2,
                name: 'Chuyện lạ',
                link: "chuyen-la",
            },
        ]
    },
    {
        id: 6,
        name: 'Giới trẻ',
        link: "/gioi-tre",
        rssLink: "https://tienphong.vn/rss/gioi-tre-4.rss",

        dropdown: [
            {
                id: 1,
                name: 'Nhịp sống',
                link: "nhip-song",
            },
            {
                id: 2,
                name: 'Cộng đồng mạng',
                link: "cong-dong-mang",
            },
            {
                id: 3,
                name: 'Tài năng trẻ',
                link: "tai-nang-tre",
            },
        ]
    },
    {
        id: 7,
        name: 'Pháp luật',
        link: "/phap-luat",
        rssLink: "https://tienphong.vn/rss/phap-luat-12.rss",

        dropdown: [
            {
                id: 1,
                name: "Bản tin 113",
                link: "/ban-tin-113",
            },
            {
                id: 2,
                name: 'Pháp đình',
                link: "/phap-dinh",
            },
        ]
    },
    {
        id: 8,
        name: 'Thể thao',
        link: "/the-thao",
        rssLink: "https://tienphong.vn/rss/the-thao-11.rss",
        dropdown: [
            {
                id: 1,
                name: 'Bóng đá',
                link: "/bong-da",
            },
            {
                id: 1,
                name: 'Hậu trường thể thao',
                link: "/hau-truong-the-thao",
            },
            {
                id: 1,
                name: 'Golf',
                link: "/golf",
            },
        ]
    },
    {
        id: 9,
        name: 'Người lính',
        link: "/nguoi-linh",
        rssLink: "https://tienphong.vn/rss/hanh-trang-nguoi-linh-182.rss",
        dropdown: [

        ]
    },
    {
        id: 10,
        name: 'Xe',
        link: "/xe",
        rssLink: "https://tienphong.vn/rss/xe-113.rss",
        dropdown: [
            {
                id: 1,
                name: 'Thị trường xe',
                link: "/th-truong-xe",
            },
            {
                id: 2,
                name: 'Đánh giá xe',
                link: "/danh-gia-xe",
            },
            {
                id: 3,
                name: 'Cộng đồng xe',
                link: "/cong-dong-xe",
            },
            {
                id: 4,
                name: 'Tư vấn',
                link: "/tu-van",
            },
        ]
    },
    {
        id: 11,
        name: 'Văn hoá',
        link: "/van-hoa",
        rssLink: "https://tienphong.vn/rss/van-hoa-7.rss",
        dropdown: [
            {
                id: 1,
                name: 'Tin văn hoá',
                link: "/tin-van-hoa",
            },
            {
                id: 2,
                name: 'Câu chuyện văn hoá',
                link: "/cau-chuyen-van-hoa",
            },
            {
                id: 3,
                name: 'Sách',
                link: "/sach",
            },
            {
                id: 4,
                name: 'Sổ bụi',
                link: "/so-bui",
            },
        ]
    },
    {
        id: 12,
        name: 'Giải trí',
        link: "/giai-tri",
        rssLink: "https://tienphong.vn/rss/giai-tri-36.rss",
        dropdown: [
            {
                id: 1,
                name: 'Sao',
                link: "/sao",
            },
            {
                id: 2,
                name: 'Hậu trường sao',
                link: "/hau-truong-sao",
            },
            {
                id: 3,
                name: 'Video',
                link: "/video",
            },
            {
                id: 4,
                name: 'Đẹp',
                link: "/dep",
            },
        ]
    },
    {
        id: 13,
        name: 'Giáo dục',
        link: "/giao-duc",
        rssLink: "https://tienphong.vn/rss/giao-duc-71.rss",
        dropdown: [
            {
                id: 1,
                name: 'Cổng trường',
                link: "/cong-truong",
            },
            {
                id: 2,
                name: 'Tuyển sinh',
                link: "/tuyen-sinh",
            },
            {
                id: 3,
                name: 'Du học',
                link: "/du-hoc",
            },
        ]
    },
    {
        id: 14,
        name: 'Khoa học',
        link: "/khoa-hoc",
        rssLink: "https://tienphong.vn/rss/cong-nghe-45.rss",
        dropdown: [
            {
                id: 1,
                name: 'Công nghệ',
                link: "/cong-nghe",
            },
            {
                id: 2,
                name: 'Vi tính',
                link: "/vi-tinh",
            },
            {
                id: 3,
                name: 'Điện thoại',
                link: "/dien-thoai",
            },
        ]
    },
    {
        id: 15,
        name: 'Hoa hậu',
        link: "/hoa-hau",
        rssLink: "https://tienphong.vn/rss/hoa-hau-253.rss",
        dropdown: [
            {
                id: 1,
                name: 'Tin tức',
                link: "/tin-tuc",
            },
            {
                id: 2,
                name: 'Ảnh',
                link: "/anh",
            },
            {
                id: 3,
                name: 'Video',
                link: "/hoa-hau-video",
            },
            {
                id: 4,
                name: 'Hậu trường hoa hậu',
                link: "/hau-truong-hoa-hau",
            },
        ]
    },
    {
        id: 16,
        name: 'Bạn đọc',
        link: "/ban-doc",
        rssLink: "https://tienphong.vn/rss/ban-doc-15.rss",
        dropdown: [
            {
                id: 1,
                name: 'Điều tra',
                link: "/dieu-tra",
            },
            {
                id: 2,
                name: 'Diễn đàn',
                link: "/dien-dan",
            },
            {
                id: 3,
                name: 'Hồi âm',
                link: "/hoi-am",
            },
            {
                id: 4,
                name: 'Nhân ái',
                link: "/nhan-ai",
            },
        ]
    },
    {
        id: 17,
        name: 'Video',
        link: "/video-clip",
        rssLink: "https://tienphong.vn/rss/giai-tri-video-153.rss",
        dropdown: [
            {
                id: 1,
                name: 'Thời sự',
                link: "/thoi-su",
            },
            {
                id: 2,
                name: 'Showbiz TV',
                link: "/showbiz-tv",
            },
            {
                id: 3,
                name: 'Thời tiết',
                link: "/thoi-tiet",
            },
            {
                id: 4,
                name: 'Thị trường',
                link: "/video-thi-truong",
            },
            {
                id: 5,
                name: 'Thể thao',
                link: "/video-the-thao",
            },
            {
                id: 6,
                name: 'Quân sự',
                link: "/quan-su",
            },
            {
                id: 7,
                name: 'Mutex',
                link: "/mutex",
            },
        ]
    },
    {
        id: 18,
        name: 'Tôi nghĩ',
        link: "toi-nghi",
        rssLink: "https://tienphong.vn/rss/toi-nghi-273.rss",

        dropdown: [
        ]
    },
    {
        id: 19,
        name: 'Chính trị',
        link: "/chinh-tri",
        rssLink: "https://tienphong.vn/rss/chinh-tri-308.rss",
    },
    {
        id: 20,
        name: 'Tin tức',
        link: "/tin-tuc",
        rssLink: "https://tienphong.vn/rss/xa-hoi-tin-tuc-104.rss",
    },
    {
        id: 21,
        name: 'Chuyện hôm nay',
        link: "/chuyen-hom-nay",
        rssLink: "https://tienphong.vn/rss/xa-hoi-2.rss",
    },
    {
        id: 22,
        name: 'Phóng sự',
        link: "/phong-su",
        rssLink: "https://tienphong.vn/rss/xa-hoi-phong-su-13.rss"
    },
    {
        id: 23,
        name: 'Doanh ngiệp',
        link: "/doanh-ngiep",
        rssLink: "https://tienphong.vn/rss/kinh-te-doanh-nghiep-22.rss",
    },
    {
        id: 24,
        name: 'Doanh nhân',
        link: "/doanh-nhan",
        rssLink: "https://tienphong.vn/rss/kinh-te-doanh-nhan-165.rss",
    },
    {
        id: 25,
        name: 'Chứng khoán',
        link: "/chung-khoan",
        rssLink: "https://tienphong.vn/rss/kinh-te-chung-khoan-105.rss",
    }
    ,
    {
        id: 26,
        name: 'Du lịch',
        link: "du-lich",
        rssLink: "https://tienphong.vn/rss/du-lich-220.rss",
    }
    ,
    {
        id: 27,
        name: 'Giảm nghèo bền vững',
        link: "giam-ngheo-ben-vung",
        rssLink: "https://tienphong.vn/rss/giam-ngheo-ben-vung-413.rss",
    }
    ,
    {
        id: 28,
        name: 'Đô thị',
        link: "do-thi",
        rssLink: "https://tienphong.vn/rss/do-thi-269.rss",
    },
    {
        id: 29,
        name: 'Thị trường',
        link: "thi-truong",
        rssLink: "https://tienphong.vn/rss/thi-truong-270.rss",
    },
    {
        id: 30,
        name: 'Nhà đẹp',
        link: "nha-dep",
        rssLink: "https://tienphong.vn/rss/nha-dep-271.rss",
    },
    {
        id: 31,
        name: 'Tư vấn',
        link: "tu-van",
        rssLink: "https://tienphong.vn/rss/tu-van-dia-oc-272.rss",
    },
    {
        id: 32,
        name: 'Dự án',
        link: "du-an",
        rssLink: "https://tienphong.vn/rss/du-an-169.rss",
    },
    {
        id: 33,
        name: 'Bác sĩ online',
        link: "bac-si-online",
        rssLink: "https://tienphong.vn/rss/bac-si-online-304.rss",
    },
    {
        id: 34,
        name: 'Thuốc dùng  - Thuốc tốt',
        link: "thuoc-dung-thuoc-tot",
        rssLink: "https://tienphong.vn/rss/thuoc-dung-thuoc-tot-305.rss",
    },
    {
        id: 35,
        name: 'Làm đẹp mỗi ngày',
        link: "lam-dep-moi-ngay",
        rssLink: "https://tienphong.vn/rss/lam-dep-moi-ngay-306.rss",
    },
    {
        id: 36,
        name: 'Thì thầm bên gối',
        link: "thi-tham-ben-goi",
        rssLink: "https://tienphong.vn/rss/suc-khoe-thi-tham-ben-goi-144.rss",
    },
    {
        id: 37,
        name: 'Phân tích -  Bình luận',
        link: "phan-tich-biinh-luan",
        rssLink: "https://tienphong.vn/rss/the-gioi-phan-tich-binh-luan-31.rss",
    },
    {
        id: 38,
        name: 'Chuyện lạ',
        link: "chuyen-la",
        rssLink: "https://tienphong.vn/rss/chuyen-la-32.rss",
    },
    {
        id:39,
        name: 'Nhịp sống',
        link: "nhip-song",
        rssLink: "https://tienphong.vn/rss/gioi-tre-nhip-song-27.rss",
    },
    {
        id: 40,
        name: 'Cộng đồng mạng',
        link: "cong-dong-mang",
        rssLink: "https://tienphong.vn/rss/cong-dong-mang-26.rss",
    },
    {
        id: 41,
        name: 'Tài năng trẻ',
        link: "tai-nang-tre",
        rssLink: "https://tienphong.vn/rss/tai-nang-tre-295.rss",
    },
    {
        id: 42,
        name: "Bản tin 113",
        link: "/ban-tin-113",
        rssLink: "https://tienphong.vn/rss/ban-tin-113-231.rss",
    },
    {
        id: 43,
        name: 'Pháp đình',
        link: "/phap-dinh",
        rssLink: "https://tienphong.vn/rss/phap-luat-chuyen-toa-173.rss",
    },
    {
        id: 44,
        name: 'Bóng đá',
        link: "/bong-da",
        rssLink: "https://tienphong.vn/rss/the-thao-bong-da-49.rss",
    },
    {
        id: 45,
        name: 'Hậu trường thể thao',
        link: "/hau-truong-the-thao",
        rssLink: "https://tienphong.vn/rss/the-thao-hau-truong-111.rss",
    },
    {
        id: 46,
        name: 'Golf',
        link: "/golf",
        rssLink: "https://tienphong.vn/rss/the-thao-golf-280.rss",
    },
    {
        id: 47,
        name: 'Thị trường xe',
        link: "/th-truong-xe",
        rssLink: "https://tienphong.vn/rss/thi-truong-xe-276.rss",
    },
    {
        id: 48,
        name: 'Đánh giá xe',
        link: "/danh-gia-xe",
        rssLink: "https://tienphong.vn/rss/danh-gia-xe-277.rss",
    },
    {
        id: 49,
        name: 'Cộng đồng xe',
        link: "/cong-dong-xe",
        rssLink: "https://tienphong.vn/rss/cong-dong-xe-278.rss",
    },
    {
        id: 50,
        name: 'Tư vấn',
        link: "/tu-van",
        rssLink: "https://tienphong.vn/rss/xe-tu-van-279.rss",
    },
    {
        id: 51,
        name: 'Tin văn hoá',
        link: "/tin-van-hoa",
        rssLink: "https://tienphong.vn/rss/tin-van-hoa-309.rss",
    },
    {
        id: 52,
        name: 'Câu chuyện văn hoá',
        link: "/cau-chuyen-van-hoa",
        rssLink: "https://tienphong.vn/rss/cau-chuyen-van-hoa-264.rss",
    },
    {
        id: 53,
        name: 'Sách',
        link: "/sach",
        rssLink: "https://tienphong.vn/rss/sach-429.rss",
    },
    {
        id: 54,
        name: 'Sổ bụi',
        link: "/so-bui",
        rssLink: "https://tienphong.vn/rss/so-bui-262.rss",
    },
    {
        id: 55,
        name: 'Sao',
        link: "/sao",
        rssLink: "https://tienphong.vn/rss/sao-35.rss",
    },
    {
        id: 56,
        name: 'Hậu trường sao',
        link: "/hau-truong-sao",
        rssLink: "https://tienphong.vn/rss/giai-tri-hau-truong-168.rss",
    },
    {
        id: 57,
        name: 'Video',
        link: "/video",
        rssLink: "https://tienphong.vn/rss/giai-tri-video-153.rss",
    },
    {
        id: 58,
        name: 'Đẹp',
        link: "/dep",
        rssLink: "https://tienphong.vn/rss/lam-dep-213.rss",
    },
    {

        id: 59,
        name: 'Cổng trường',
        link: "/cong-truong",
        rssLink: "https://tienphong.vn/rss/cong-truong-310.rss",
    },
    {
        id: 60,
        name: 'Tuyển sinh',
        link: "/tuyen-sinh",
        rssLink: "https://tienphong.vn/rss/tuyen-sinh2011-163.rss",
    },
    {
        id: 61,
        name: 'Du học',
        link: "/du-hoc",
        rssLink: "https://tienphong.vn/rss/giao-duc-du-hoc-40.rss",
    },
    {
        id: 62,
        name: 'Công nghệ',
        link: "/cong-nghe",
        rssLink: "https://tienphong.vn/rss/cong-nghe-khoa-hoc-46.rss",

    },
    {
        id: 63,
        name: 'Vi tính',
        link: "/vi-tinh",
        rssLink: "https://tienphong.vn/rss/cong-nghe-vi-tinh-170.rss",

    },
    {
        id: 64,
        name: 'Điện thoại',
        link: "/dien-thoai",
        rssLink: "https://tienphong.vn/rss/cong-nghe-dien-thoai-171.rss",

    },
    {
        id: 65,
        name: 'Tin tức',
        link: "/tin-tuc",
        rssLink: "https://tienphong.vn/rss/hh-tin-tuc-255.rss",

    },
    {
        id: 66,
        name: 'Ảnh',
        link: "/anh",
        rssLink: "https://tienphong.vn/rss/hh-anh-257.rss",

    },
    {
        id: 67,
        name: 'Video',
        link: "/hoa-hau-video",
        rssLink: "https://tienphong.vn/rss/video-clip-115.rss",

    },
    {
        id: 68,
        name: 'Hậu trường hoa hậu',
        link: "/hau-truong-hoa-hau",
        rssLink: "https://tienphong.vn/rss/hau-truong-265.rss",

    },
    {
        id: 69,
        name: 'Điều tra',
        link: "/dieu-tra",
        rssLink: "https://tienphong.vn/rss/ban-doc-dieu-tra-300.rss",

    },
    {
        id: 70,
        name: 'Diễn đàn',
        link: "/dien-dan",
        rssLink: "https://tienphong.vn/rss/ban-doc-dien-dan-301.rss",

    },
    {
        id: 71,
        name: 'Hồi âm',
        link: "/hoi-am",
        rssLink: "https://tienphong.vn/rss/ban-doc-hoi-am-302.rss",

    },
    {
        id: 72,
        name: 'Nhân ái',
        link: "/nhan-ai",
        rssLink: "https://tienphong.vn/rss/ban-doc-nhan-ai-303.rss",

    },
    {
        id: 73,
        name: 'Thời sự',
        link: "/thoi-su",
        rssLink: "https://tienphong.vn/rss/thoi-su-421.rss",

    },
    {
        id: 74,
        name: 'Showbiz TV',
        link: "/showbiz-tv",
        rssLink: "https://tienphong.vn/rss/showbiz-tv-422.rss",

    },
    {
        id: 75,
        name: 'Thời tiết',
        link: "/thoi-tiet",
        rssLink: "https://tienphong.vn/rss/thoi-tiet-423.rss",

    },
    {
        id: 76,
        name: 'Thị trường',
        link: "/video-thi-truong",
        rssLink: "https://tienphong.vn/rss/video-thi-truong-424.rss",

    },
    {
        id: 77,
        name: 'Thể thao',
        link: "/video-the-thao",
        rssLink: "https://tienphong.vn/rss/video-the-thao-425.rss",

    },
    {
        id: 78,
        name: 'Quân sự',
        link: "/quan-su",
        rssLink: "https://tienphong.vn/rss/quan-su-426.rss",

    },
    {
        id: 79,
        name: 'Mutex',
        link: "/mutex",
        rssLink: "https://tienphong.vn/rss/mutex-427.rss",

    },


]

const danhmuc = [
    {
        id: 1,
        name: 'Xã hội',
        link: "/xa-hoi",
        rssLink: "https://tienphong.vn/rss/xa-hoi-2.rss",
        dropdown: [
            {
                id: 1,
                name: 'Chính trị',
                link: "chinh-tri",
                rssLink: "https://tienphong.vn/rss/chinh-tri-308.rss",
            },
            {
                id: 2,
                name: 'Tin tức',
                link: "tin-tuc",
                rssLink: "https://tienphong.vn/rss/xa-hoi-tin-tuc-104.rss",
            },
            {
                id: 3,
                name: 'Chuyện hôm nay',
                link: "chuyen-hom-nay",
                rssLink: "https://tienphong.vn/rss/xa-hoi-2.rss",
            },
            {
                id: 4,
                name: 'Phóng sự',
                link: "phong-su",
            },

        ]
    },
    {
        id: 2,
        name: 'Kinh tế',
        link: "/kinh-te",
        rssLink: "https://tienphong.vn/rss/kinh-te-3.rss",
        dropdown: [
            {
                id: 1,
                name: 'Doanh ngiệp',
                link: "doanh-ngiep",
            },
            {
                id: 2,
                name: 'Doanh nhân',
                link: "doanh-nhan",
            },
            {
                id: 3,
                name: 'Chứng khoán',
                link: "chung-khoan",
            }
            ,
            {
                id: 4,
                name: 'Du lịch',
                link: "du-lich",
            }
            ,
            {
                id: 5,
                name: 'Giảm nghèo bền vững',
                link: "giam-ngheo-ben-vung",
            }
        ]
    },
    {
        id: 3,
        name: 'Địa ốc',
        link: "/dia-oc",
        rssLink: "https://tienphong.vn/rss/dia-oc-166.rss",
        dropdown: [
            {
                id: 1,
                name: 'Đô thị',
                link: "do-thi",
            },
            {
                id: 2,
                name: 'Thị trường',
                link: "thi-truong",
            },
            {
                id: 3,
                name: 'Nhà đẹp',
                link: "nha-dep",
            },
            {
                id: 4,
                name: 'Tư vấn',
                link: "tu-van",
            },
            {
                id: 5,
                name: 'Dự án',
                link: "du-an",
            },
        ]
    },
    {
        id: 4,
        name: 'Sức khoẻ',
        link: "/suc-khoe",
        rssLink: "https://tienphong.vn/rss/suc-khoe-210.rss",
        dropdown: [
            {
                id: 1,
                name: 'Bác sĩ online',
                link: "bac-si-online",
            },
            {
                id: 2,
                name: 'Thuốc dùng  - Thuốc tốt',
                link: "thuoc-dung-thuoc-tot",
            },
            {
                id: 3,
                name: 'Làm đẹp mỗi ngày',
                link: "lam-dep-moi-ngay",
            },
            {
                id: 4,
                name: 'Thì thầm bên gối',
                link: "thi-tham-ben-goi",
            },
        ]
    },
    {
        id: 5,
        name: 'Thế giới',
        link: "/the-gioi",
        rssLink: "https://tienphong.vn/rss/the-gioi-5.rss",
        dropdown: [
            {
                id: 1,
                name: 'Phân tích -  Bình luận',
                link: "phan-tich-biinh-luan",
            },
            {
                id: 2,
                name: 'Chuyện lạ',
                link: "chuyen-la",
            },
        ]
    },
    {
        id: 6,
        name: 'Giới trẻ',
        link: "/gioi-tre",
        rssLink: "https://tienphong.vn/rss/gioi-tre-4.rss",

        dropdown: [
            {
                id: 1,
                name: 'Nhịp sống',
                link: "nhip-song",
            },
            {
                id: 2,
                name: 'Cộng đồng mạng',
                link: "cong-dong-mang",
            },
            {
                id: 3,
                name: 'Tài năng trẻ',
                link: "tai-nang-tre",
            },
        ]
    },
    {
        id: 7,
        name: 'Pháp luật',
        link: "/phap-luat",
        rssLink: "https://tienphong.vn/rss/phap-luat-12.rss",

        dropdown: [
            {
                id: 1,
                name: "Bản tin 113",
                link: "/ban-tin-113",
            },
            {
                id: 2,
                name: 'Pháp đình',
                link: "/phap-dinh",
            },
        ]
    },
    {
        id: 8,
        name: 'Thể thao',
        link: "/the-thao",
        rssLink: "https://tienphong.vn/rss/the-thao-11.rss",
        dropdown: [
            {
                id: 1,
                name: 'Bóng đá',
                link: "/bong-da",
            },
            {
                id: 1,
                name: 'Hậu trường thể thao',
                link: "/hau-truong-the-thao",
            },
            {
                id: 1,
                name: 'Golf',
                link: "/golf",
            },
        ]
    },
    {
        id: 9,
        name: 'Người lính',
        link: "/nguoi-linh",
        rssLink: "https://tienphong.vn/rss/hanh-trang-nguoi-linh-182.rss",
        dropdown: [

        ]
    },
    {
        id: 10,
        name: 'Xe',
        link: "/xe",
        rssLink: "https://tienphong.vn/rss/xe-113.rss",
        dropdown: [
            {
                id: 1,
                name: 'Thị trường xe',
                link: "/th-truong-xe",
            },
            {
                id: 2,
                name: 'Đánh giá xe',
                link: "/danh-gia-xe",
            },
            {
                id: 3,
                name: 'Cộng đồng xe',
                link: "/cong-dong-xe",
            },
            {
                id: 4,
                name: 'Tư vấn',
                link: "/tu-van",
            },
        ]
    },
    {
        id: 11,
        name: 'Văn hoá',
        link: "/van-hoa",
        rssLink: "https://tienphong.vn/rss/van-hoa-7.rss",
        dropdown: [
            {
                id: 1,
                name: 'Tin văn hoá',
                link: "/tin-van-hoa",
            },
            {
                id: 2,
                name: 'Câu chuyện văn hoá',
                link: "/cau-chuyen-van-hoa",
            },
            {
                id: 3,
                name: 'Sách',
                link: "/sach",
            },
            {
                id: 4,
                name: 'Sổ bụi',
                link: "/so-bui",
            },
        ]
    },
    {
        id: 12,
        name: 'Giải trí',
        link: "/giai-tri",
        rssLink: "https://tienphong.vn/rss/giai-tri-36.rss",
        dropdown: [
            {
                id: 1,
                name: 'Sao',
                link: "/sao",
            },
            {
                id: 2,
                name: 'Hậu trường sao',
                link: "/hau-truong-sao",
            },
            {
                id: 3,
                name: 'Video',
                link: "/video",
            },
            {
                id: 4,
                name: 'Đẹp',
                link: "/dep",
            },
        ]
    },
    {
        id: 13,
        name: 'Giáo dục',
        link: "/giao-duc",
        rssLink: "https://tienphong.vn/rss/giao-duc-71.rss",
        dropdown: [
            {
                id: 1,
                name: 'Cổng trường',
                link: "/cong-truong",
            },
            {
                id: 2,
                name: 'Tuyển sinh',
                link: "/tuyen-sinh",
            },
            {
                id: 3,
                name: 'Du học',
                link: "/du-hoc",
            },
        ]
    },
    {
        id: 14,
        name: 'Khoa học',
        link: "/khoa-hoc",
        rssLink: "https://tienphong.vn/rss/cong-nghe-45.rss",
        dropdown: [
            {
                id: 1,
                name: 'Công nghệ',
                link: "/cong-nghe",
            },
            {
                id: 2,
                name: 'Vi tính',
                link: "/vi-tinh",
            },
            {
                id: 3,
                name: 'Điện thoại',
                link: "/dien-thoai",
            },
        ]
    },
    {
        id: 15,
        name: 'Hoa hậu',
        link: "/hoa-hau",
        rssLink: "https://tienphong.vn/rss/hoa-hau-253.rss",
        dropdown: [
            {
                id: 1,
                name: 'Tin tức',
                link: "/tin-tuc",
            },
            {
                id: 2,
                name: 'Ảnh',
                link: "/anh",
            },
            {
                id: 3,
                name: 'Video',
                link: "/hoa-hau-video",
            },
            {
                id: 4,
                name: 'Hậu trường hoa hậu',
                link: "/hau-truong-hoa-hau",
            },
        ]
    },
    {
        id: 16,
        name: 'Bạn đọc',
        link: "/ban-doc",
        rssLink: "https://tienphong.vn/rss/ban-doc-15.rss",
        dropdown: [
            {
                id: 1,
                name: 'Điều tra',
                link: "/dieu-tra",
            },
            {
                id: 2,
                name: 'Diễn đàn',
                link: "/dien-dan",
            },
            {
                id: 3,
                name: 'Hồi âm',
                link: "/hoi-am",
            },
            {
                id: 4,
                name: 'Nhân ái',
                link: "/nhan-ai",
            },
        ]
    },
    {
        id: 17,
        name: 'Video',
        link: "/video-clip",
        rssLink: "https://tienphong.vn/rss/giai-tri-video-153.rss",
        dropdown: [
            {
                id: 1,
                name: 'Thời sự',
                link: "/thoi-su",
            },
            {
                id: 2,
                name: 'Showbiz TV',
                link: "/showbiz-tv",
            },
            {
                id: 3,
                name: 'Thời tiết',
                link: "/thoi-tiet",
            },
            {
                id: 4,
                name: 'Thị trường',
                link: "/video-thi-truong",
            },
            {
                id: 5,
                name: 'Thể thao',
                link: "/video-the-thao",
            },
            {
                id: 6,
                name: 'Quân sự',
                link: "/quan-su",
            },
            {
                id: 7,
                name: 'Mutex',
                link: "/mutex",
            },
        ]
    },
    {
        id: 18,
        name: 'Tôi nghĩ',
        link: "toi-nghi",
        rssLink: "https://tienphong.vn/rss/toi-nghi-273.rss",

        dropdown: [
        ]
    },
    {
        id: 19,
        name: 'Chính trị',
        link: "chinh-tri",
        rssLink: "https://tienphong.vn/rss/chinh-tri-308.rss",
    },
    {
        id: 20,
        name: 'Tin tức',
        link: "tin-tuc",
        rssLink: "https://tienphong.vn/rss/xa-hoi-tin-tuc-104.rss",
    },
    {
        id: 21,
        name: 'Chuyện hôm nay',
        link: "chuyen-hom-nay",
        rssLink: "https://tienphong.vn/rss/xa-hoi-2.rss",
    },
    {
        id: 22,
        name: 'Phóng sự',
        link: "phong-su",
        rssLink: "https://tienphong.vn/rss/xa-hoi-phong-su-13.rss",
    },
    {
        id: 23,
        name: 'Doanh ngiệp',
        link: "doanh-ngiep",
        rssLink: "https://tienphong.vn/rss/kinh-te-doanh-nghiep-22.rss",
    },
    {
        id: 24,
        name: 'Doanh nhân',
        link: "doanh-nhan",
        rssLink: "https://tienphong.vn/rss/kinh-te-doanh-nhan-165.rss",
    },
    {
        id: 25,
        name: 'Chứng khoán',
        link: "chung-khoan",
        rssLink: "https://tienphong.vn/rss/kinh-te-chung-khoan-105.rss",
    }
    ,
    {
        id: 26,
        name: 'Du lịch',
        link: "du-lich",
        rssLink: "https://tienphong.vn/rss/du-lich-220.rss",
    }
    ,
    {
        id: 27,
        name: 'Giảm nghèo bền vững',
        link: "giam-ngheo-ben-vung",
        rssLink: "https://tienphong.vn/rss/giam-ngheo-ben-vung-413.rss",
    },
    {
        id: 28,
        name: 'Đô thị',
        link: "do-thi",
        rssLink: "https://tienphong.vn/rss/do-thi-269.rss",
    },
    {
        id: 29,
        name: 'Thị trường',
        link: "thi-truong",
        rssLink: "https://tienphong.vn/rss/thi-truong-270.rss",
    },
    {
        id: 30,
        name: 'Nhà đẹp',
        link: "nha-dep",
        rssLink: "https://tienphong.vn/rss/nha-dep-271.rss",
    },
    {
        id: 31,
        name: 'Tư vấn',
        link: "tu-van",
        rssLink: "https://tienphong.vn/rss/tu-van-dia-oc-272.rss",
    },
    {
        id: 32,
        name: 'Dự án',
        link: "du-an",
        rssLink: "https://tienphong.vn/rss/du-an-169.rss",
    },
    {
        id: 33,
        name: 'Bác sĩ online',
        link: "bac-si-online",
        rssLink: "https://tienphong.vn/rss/bac-si-online-304.rss",
    },
    {
        id: 34,
        name: 'Thuốc dùng  - Thuốc tốt',
        link: "thuoc-dung-thuoc-tot",
        rssLink: "https://tienphong.vn/rss/thuoc-dung-thuoc-tot-305.rss",
    },
    {
        id: 35,
        name: 'Làm đẹp mỗi ngày',
        link: "lam-dep-moi-ngay",
        rssLink: "https://tienphong.vn/rss/lam-dep-moi-ngay-306.rss",
    },
    {
        id: 36,
        name: 'Thì thầm bên gối',
        link: "thi-tham-ben-goi",
        rssLink: "https://tienphong.vn/rss/suc-khoe-thi-tham-ben-goi-144.rss",
    },
]
export default route;