import type { ReactNode } from 'react';

interface ListRowProps {
  children: ReactNode;
  trailing?: ReactNode;
  roundImage?: boolean;
  className?: string;
}

const ListRow = ({ children, trailing, roundImage = false, className = '' }: ListRowProps) => (
  <div className={`flex gap-4 px-6 py-4 ${className}`}>
    <div aria-hidden="true" className={`size-[54px] shrink-0 bg-[#ececec] ${roundImage ? 'rounded-full' : 'rounded-lg'}`} />
    <div className="min-w-0 flex-1 break-keep">{children}</div>
    {trailing && <div className="flex shrink-0 items-center">{trailing}</div>}
  </div>
);

export default ListRow;

