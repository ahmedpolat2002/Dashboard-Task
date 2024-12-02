import Link from "next/link";

export default function LinkNav({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      style={{ textDecoration: "none", color: "white" }}
      href={href}
      passHref
    >
      {children}
    </Link>
  );
}
