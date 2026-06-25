export interface FormDataType {
  name: string;
  phone: string;
  moveDate?: string;
  fromAddress: string;
  toAddress: string;
  notes?: string;
}

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface ServiceMeta {
  id: string;
  slug: string;
  titleAr: string;
  descAr: string;
  icon: string;
}

export interface LocationMeta {
  id: string;
  slug: string;
  nameAr: string;
  descAr: string;
}
