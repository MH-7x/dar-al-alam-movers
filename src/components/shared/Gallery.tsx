"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  {
    fileName: "/gallery/شركة-نقل-اثاث-دبي.jpg",
    altText:
      "شركة دار العلم نقل اثاث - نقل اثاث في دبي بدقة عالية وبدون توقف لعملك",
  },
  {
    fileName: "/gallery/نقل-اثاث-ابوظبي-شركة-دار-العلم.jpg",
    altText:
      "نقل اثاث ابوظبي مع شركة دار العلم نقل اثاث - فريق محترف ينقل أثاث فيلا في أبوظبي",
  },
  {
    fileName: "/gallery/نقل-اثاث-العين-شركة-دار-العلم.jpg",
    altText:
      "نقل اثاث العين مع شركة دار العلم نقل اثاث - شاحنة مغلقة في طريق العين السكني",
  },
  {
    fileName: "/gallery/نقل-اثاث-الشارقة-شركة-دار-العلم.jpg",
    altText:
      "نقل أثاث الشارقة مع شركة دار العلم نقل اثاث - تحميل أثاث الشقق في الشارقة باحترافية",
  },
  {
    fileName: "/gallery/نقل-اثاث-عجمان-شركة-دار-العلم.jpg",
    altText:
      "نقل اثاث عجمان مع شركة دار العلم نقل اثاث - شاحنة مجهزة وفريق متخصص في عجمان",
  },
  {
    fileName: "/gallery/نقل-اثاث-راس-الخيمة-شركة-دار-العلم.jpg",
    altText:
      "نقل اثاث راس الخيمة مع شركة دار العلم نقل اثاث - تفريغ الأثاث في فيلا برأس الخيمة",
  },
  {
    fileName: "/gallery/نقل-الاثاث-ام-القيوين-شركة-دار-العلم.jpg",
    altText:
      "نقل الاثاث ام القيوين مع شركة دار العلم نقل اثاث - شاحنة وفريق محترف في أم القيوين",
  },
  {
    fileName: "/gallery/نقل-اثاث-الفجيرة-شركة-دار-العلم.jpg",
    altText:
      "نقل اثاث الفجيرة مع شركة دار العلم نقل اثاث - تحميل أثاث في فيلا بالفجيرة بخلفية جبال الحجر",
  },
];

export function MovingGallery() {
  return (
    <section className="w-full py-16 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
            معرض الصور
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            أعمالنا تتحدث عنّا
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            نماذج من خدماتنا الميدانية في نقل وتغليف الأثاث عبر دبي والإمارات
          </p>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          className="w-full"
        >
          <CarouselContent className="-mr-2 -ml-0 md:-mr-4">
            {images.map((src, index) => (
              <CarouselItem
                key={index}
                className="pr-2 md:pr-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-muted group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={src.fileName}
                      fill
                      alt={`${src.altText} - دار العالم لنقل الأثاث دبي`}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 rounded-2xl" />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 h-11 w-11 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 rounded-full" />
            <CarouselNext className="static translate-y-0 h-11 w-11 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
