// Menu Nav Links
interface navLinks {
  url: string;
  title: string;
}

// Hero News
interface heroNews extends navLinks {
  description: string;
  readlink: string;
}

// Right Side News
interface sideNews {
  id: string;
  url: string;
  title: string;
  description: string;
}

// Bottom Featured News
interface featuredNews extends sideNews {
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

// Footer Attribution Data
interface footData {
  beforeText: string;
  url: string;
  label: string;
  fromName: string;
  id: number;
}
