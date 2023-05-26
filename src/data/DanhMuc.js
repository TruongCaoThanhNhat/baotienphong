const categorys = [
    {
        id: 1,
        name: 'Xã hội',
        link: "/xa-hoi",
        dropdown: [
            {
                id: 1,
                name: 'Chính trị',
                link: "chinh-tri",
            },
            {
                id: 2,
                name: 'Tin tức',
                link: "tin-tuc",
            },
            {
                id: 3,
                name: 'Chuyện hôm nay',
                link: "chuyen-hom-nay",
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
        dropdown: [

        ]
    },
    {
        id: 10,
        name: 'Xe',
        link: "/xe",
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
        dropdown: [
        ]
    },
]

export default categorys;