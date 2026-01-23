import { ProfileData } from './types';

const BASE_PATH = import.meta.env.BASE_URL;

export const profileData: ProfileData = {
  name: "Nguyễn Hoài Nam",
  role: "Senior Embeeded Software Engineer",
  avatar: "https://media.licdn.com/dms/image/v2/D5603AQHU6G9mXv1O3Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691414441584?e=1746057600&v=beta&t=fFz9vYn5fKzKx-z0xXz-z0xXz-z0xXz-z0xXz-z0xXz",
  avatarGallery: [
    `${BASE_PATH}avatars/IMG_1.jpg`,
    `${BASE_PATH}avatars/IMG_2.jpg`,
    `${BASE_PATH}avatars/IMG_3.jpg`,
    `${BASE_PATH}avatars/IMG_4.jpg`,
    `${BASE_PATH}avatars/IMG_5.jpg`
  ],
  bio: "I am an Embedded Software Engineer with hands-on experience in the automotive domain, working across all layers from low-level firmware to high-level application development. Currently, I am focusing on system performance and stability, exploring methods to enhance reliability and efficiency. In addition, I am passionate about researching Android solutions, developing applications, and working with data collection and analysis.",
  location: "TP. Hồ Chí Minh, Việt Nam",
  email: "nghnam.nguyen@gmail.com",
  github: "https://github.com/hoainamute",
  linkedin: "https://www.linkedin.com/in/namhoainguyen/",
  facebook: "https://www.facebook.com/nem.hnguyen/",
  about: ["I am a Embedded Software Engineer with 6 years of experience in the automotive domain,", 
    "specializing in MCAL layer, telematics, and currently focusing on Linux system performance.",
    "I always seeking inspiration at work and leveraging AI to achieve goals with accuracy, speed, and efficiency."],
  
  education: [
    {
      school: "Đại học ...",
      degree: "Bachelor",
      field: "Computer Engineering / Embedded Systems",
      period: "2015 - 2019",
      description: [
        "Relevant coursework: Embedded Systems, Operating Systems, Networking",
        "Activities: ...",
      ],
    },
  ],
  
  skills: [
    {
      category: "System Performance",
      items: ["Linux system", "C/C++", "Performance Optimization", "Design Systems", 
        "Linux profiling/debugging", "BSP", "Yocto", "kernel"]
    },
    {
      category: "Application Development",
      items: ["Kotlin", "Android"]
    },
    {
      category: "Automotive Development",
      items: ["MCAL", "CAN", "Agile", "V-MODEL", "C"]
    },
    {
      category: "Complementary Skills",
      items: ["GIT"]
    }
  ],
  
  experience: [
    {
      company: "LGEDV ",
      position: "Senior Research Engineer",
      period: "2022-07 - Now",
      description: [
        ""
      ]
    },
    {
      company: "Digime",
      position: "Solution Engineer",
      period: "2023 - now",
      description: [
        "Phát triển nền tảng thanh toán trực tuyến bảo mật cao sử dụng kiến trúc Microservices.",
        "Xử lý các bài toán về đồng bộ dữ liệu thời gian thực giữa ứng dụng web và mobile.",
        "Giảm 40% chi phí vận hành hạ tầng Cloud bằng cách tối ưu hóa các Docker images và serverless functions."
      ]
    },
    {
      company: "Renesas Design Viet Nam",
      position: "Software Engineer",
      period: "2019 - 2022",
      description: [
        "Tham gia phát triển dự án CMS cho khách hàng thị trường Nhật Bản.",
        "Làm quen với quy trình làm việc chuyên nghiệp chuẩn Agile/Scrum."
      ]
    }
  ],
  
  projects: [
    {
      title: "React Vietnam Community Hub",
      description: "Nền tảng kết nối cộng đồng lập trình viên React tại Việt Nam, nơi chia sẻ tài liệu và tổ chức các buổi meetup công nghệ.",
      image: "https://picsum.photos/800/600?random=101",
      tags: ["React", "Next.js", "Community"],
      link: "https://github.com/namhoainguyen"
    },
    {
      title: "AI Code Reviewer",
      description: "Công cụ tự động đánh giá chất lượng mã nguồn sử dụng Gemini API, giúp phát hiện sớm các lỗ hổng bảo mật và code smells.",
      image: "https://picsum.photos/800/600?random=105",
      tags: ["TypeScript", "Gemini API", "Node.js"],
      link: "#"
    }
  ],
  
  blog: [
    {
      id: "1",
      title: "Hành trình tối ưu Performance cho ứng dụng React",
      excerpt: "Chia sẻ những kỹ thuật thực chiến để đưa điểm số Lighthouse lên 100/100 mà không hy sinh trải nghiệm người dùng.",
      date: "12/02/2024",
      content: `Trong thế giới web hiện nay, tốc độ không chỉ là một tính năng, nó là yếu tố sống còn của sản phẩm. Bài viết này tôi sẽ đi sâu vào các kỹ thuật như Code Splitting, Memoization và xử lý ảnh hiệu quả trong Next.js.\n\nĐầu tiên là việc hiểu rõ Render Cycle của React. Nhiều người lạm dụng memo mà không biết rằng nó đôi khi còn gây tốn kém hơn nếu không dùng đúng cách. Tôi đã áp dụng kỹ thuật 'Intersection Observer' để lazy load các components nặng, giúp thời gian tương tác (TTI) giảm đáng kể.\n\nKết quả là tỉ lệ thoát trang của người dùng giảm 15% sau khi hệ thống đạt điểm hiệu năng tối ưu.`,
      coverImage: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Xây dựng Văn hóa Kỹ thuật mạnh mẽ cho Startup",
      excerpt: "Làm thế nào để duy trì chất lượng mã nguồn và tốc độ phát triển khi quy mô đội ngũ tăng nhanh?",
      date: "05/01/2024",
      content: `Văn hóa kỹ thuật (Engineering Culture) không phải là những buổi liên hoan, mà là cách chúng ta review code, cách chúng ta đối mặt với technical debt.\n\nTôi tin rằng quy trình Code Review nghiêm túc và việc tự động hóa (Automation) là hai cột trụ quan trọng nhất để giữ cho con tàu công nghệ đi đúng hướng. Tại các startup tôi từng làm việc, chúng tôi thiết lập 'Zero-Tolerance Policy' cho các lỗi lặt vặt về format thông qua Prettier và ESLint, giúp reviewers tập trung hoàn toàn vào logic nghiệp vụ.\n\nNgoài ra, việc tổ chức các buổi 'Lightning Talks' hàng tuần giúp kiến trúc sư và lập trình viên trẻ có tiếng nói chung, thúc đẩy sự sáng tạo không ngừng.`,
      coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "Tại sao nên chọn Next.js App Router cho dự án năm 2024?",
      excerpt: "Phân tích những thay đổi mang tính đột phá của App Router và cách nó tối ưu hóa SEO.",
      date: "20/12/2023",
      content: `Next.js 13+ với App Router không chỉ là một thay đổi nhỏ về cú pháp, nó là một cuộc cách mạng về cách chúng ta nghĩ về Server Components. Việc tách biệt giữa Server và Client components giúp giảm lượng JS gửi xuống trình duyệt một cách kinh ngạc.\n\nTrong bài này, tôi hướng dẫn cách tận dụng tối đa tính năng 'Streaming' để hiển thị UI ngay cả khi dữ liệu chưa tải xong hoàn toàn, mang lại trải nghiệm 'mượt mà' nhất cho người dùng cuối.`,
      coverImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop"
    }
  ]
};