import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding: 24px 28px 40px;
  color: #111827;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
`;

export const HeaderContent = styled.div``;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 700;
  color: #111827;
`;

export const PageDescription = styled.p`
  margin: 6px 0 0;
  font-size: 17px;
  color: #64748b;
`;

export const UploadButton = styled.button`
  min-height: 52px;
  padding: 0 22px;
  border: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, #4f46f5 0%, #b000f5 100%);
  color: #ffffff;
  font-size: 17px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  box-shadow: 0 7px 15px rgba(91, 33, 182, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(91, 33, 182, 0.25);
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(170px, 1fr));
  gap: 18px;
  margin-bottom: 26px;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface StatCardProps {
  $background: string;
  $border: string;
  $color: string;
}

export const StatCard = styled.div<StatCardProps>`
  min-height: 96px;
  padding: 18px 20px;
  border: 1px solid ${({ $border }) => $border};
  border-radius: 12px;
  background: ${({ $background }) => $background};
`;

export const StatValue = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 29px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const StatLabel = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 16px;
  font-weight: 400;
`;

export const FilterCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 18px;
  margin-bottom: 26px;
  box-shadow: 0 2px 5px rgba(15, 23, 42, 0.08);
`;

export const FilterRow = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 2fr) repeat(3, minmax(160px, 1fr)) 220px;
  gap: 14px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIconBox = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #94a3b8;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  border-radius: 11px;
  padding: 0 15px 0 45px;
  outline: none;
  background: #ffffff;
  color: #111827;
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #6d5dfc;
    box-shadow: 0 0 0 3px rgba(109, 93, 252, 0.1);
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  border-radius: 11px;
  padding: 0 42px 0 16px;
  outline: none;
  background: #ffffff;
  color: #27272a;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    border-color: #6d5dfc;
    box-shadow: 0 0 0 3px rgba(109, 93, 252, 0.1);
  }
`;

export const MoreFilterButton = styled.button`
  height: 50px;
  border: 1px solid #cbd5e1;
  border-radius: 11px;
  background: #ffffff;
  color: #18181b;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  cursor: pointer;

  &:hover {
    background: #f8fafc;
  }
`;

export const TableCard = styled.div`
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 2px 5px rgba(15, 23, 42, 0.06);
`;

export const TableScroll = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 1200px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: #f8fafc;
`;

export const TableHeader = styled.th`
  padding: 18px 14px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
  color: #475569;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;

  &:first-child {
    width: 54px;
    padding-left: 28px;
  }

  &:last-child {
    text-align: center;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #eef2f7;
  transition: background 0.2s ease;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background: #fafbff;
  }
`;

export const TableCell = styled.td`
  padding: 20px 14px;
  color: #64748b;
  font-size: 15px;
  vertical-align: middle;

  &:first-child {
    padding-left: 28px;
  }
`;

export const Checkbox = styled.input`
  width: 19px;
  height: 19px;
  cursor: pointer;
  accent-color: #5b45f5;
`;

export const DocumentName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #111827;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;

export const DocumentIcon = styled.div`
  color: #94a3b8;
  display: flex;
  align-items: center;
`;

export const CategoryText = styled.span`
  display: inline-block;
  max-width: 125px;
  line-height: 1.5;
`;

export const UserText = styled.span`
  display: inline-block;
  max-width: 105px;
  line-height: 1.5;
`;

export const DateText = styled.span`
  display: inline-block;
  max-width: 90px;
  line-height: 1.5;
`;

type StatusType = "processed" | "processing" | "failed";

interface StatusBadgeProps {
  $status: StatusType;
}

const statusColors = {
  processed: {
    background: "#d9fbe8",
    color: "#0a8f49",
  },
  processing: {
    background: "#dbeafe",
    color: "#2563eb",
  },
  failed: {
    background: "#fee2e2",
    color: "#dc2626",
  },
};

export const StatusBadge = styled.span<StatusBadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  background: ${({ $status }) => statusColors[$status].background};
  color: ${({ $status }) => statusColors[$status].color};
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const IconButton = styled.button`
  border: 0;
  padding: 4px;
  background: transparent;
  color: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #5b45f5;
  }
`;