interface ImageCaptionProps {
  children: React.ReactNode;
}

export default function ImageCaption({ children }: ImageCaptionProps) {
  return (
    <p className="text-center text-text-tertiary text-sm font-mono my-1">
      {children}
    </p>
  );
}
