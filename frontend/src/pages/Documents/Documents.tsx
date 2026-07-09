import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Eye,
  FileText,
  Filter,
  LoaderCircle,
  MessageSquare,
  Search,
  Upload,
  XCircle,
} from "lucide-react";
import type { ChangeEvent } from "react";
import {
  Actions,
  CategoryText,
  Checkbox,
  DateText,
  DocumentIcon,
  DocumentName,
  FilterCard,
  FilterRow,
  HeaderContent,
  IconButton,
  MoreFilterButton,
  Page,
  PageDescription,
  PageHeader,
  PageTitle,
  SearchIconBox,
  SearchInput,
  SearchWrapper,
  Select,
  StatCard,
  StatLabel,
  StatsGrid,
  StatValue,
  StatusBadge,
  Table,
  TableBody,
  TableCard,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableScroll,
  UploadButton,
  UserText,
} from "./useDocumentsStyles";

type DocumentStatus = "processed" | "processing" | "failed";

interface DocumentItem {
  id: number;
  name: string;
  type: string;
  category: string;
  fileType: string;
  size: string;
  pages: number;
  uploadedBy: string;
  date: string;
  status: DocumentStatus;
}

const documents: DocumentItem[] = [
  {
    id: 1,
    name: "Vendor_A_Contract.pdf",
    type: "Contract",
    category: "Vendor Agreement",
    fileType: "PDF",
    size: "2.4 MB",
    pages: 45,
    uploadedBy: "Sarah Johnson",
    date: "2026-07-08",
    status: "processed",
  },
  {
    id: 2,
    name: "Vendor_B_Contract.pdf",
    type: "Contract",
    category: "Vendor Agreement",
    fileType: "PDF",
    size: "1.8 MB",
    pages: 38,
    uploadedBy: "Michael Chen",
    date: "2026-07-07",
    status: "processed",
  },
  {
    id: 3,
    name: "Employee_Handbook_2026.pdf",
    type: "Policy",
    category: "HR",
    fileType: "PDF",
    size: "3.1 MB",
    pages: 62,
    uploadedBy: "Emma Wilson",
    date: "2026-07-07",
    status: "processing",
  },
  {
    id: 4,
    name: "HR_Leave_Policy.pdf",
    type: "Policy",
    category: "HR",
    fileType: "PDF",
    size: "945 KB",
    pages: 24,
    uploadedBy: "Emma Wilson",
    date: "2026-07-06",
    status: "processed",
  },
  {
    id: 5,
    name: "Security_Audit_Report.pdf",
    type: "Report",
    category: "Security",
    fileType: "PDF",
    size: "4.6 MB",
    pages: 78,
    uploadedBy: "David Smith",
    date: "2026-07-05",
    status: "failed",
  },
];

const stats = [
  {
    value: "2,148",
    label: "All Documents",
    background: "#eff6ff",
    border: "#bfdbfe",
    color: "#2563eb",
  },
  {
    value: "2,086",
    label: "Processed",
    background: "#f0fdf4",
    border: "#bbf7d0",
    color: "#07883f",
  },
  {
    value: "48",
    label: "Processing",
    background: "#fffbeb",
    border: "#fde68a",
    color: "#c65100",
  },
  {
    value: "14",
    label: "Failed",
    background: "#fff1f2",
    border: "#fecdd3",
    color: "#c50011",
  },
  {
    value: "384",
    label: "Scanned Documents",
    background: "#faf5ff",
    border: "#e9d5ff",
    color: "#8b0af0",
  },
];

const getStatusIcon = (status: DocumentStatus) => {
  if (status === "processed") {
    return <CheckCircle2 size={17} />;
  }

  if (status === "processing") {
    return <LoaderCircle size={17} />;
  }

  return <XCircle size={17} />;
};

const formatStatus = (status: DocumentStatus) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const Documents = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [selectedDocuments, setSelectedDocuments] = useState<number[]>([]);

  const filteredDocuments = useMemo(() => {
    return documents.filter((document) => {
      const searchValue = search.trim().toLowerCase();

      const matchesSearch =
        !searchValue ||
        document.name.toLowerCase().includes(searchValue) ||
        document.uploadedBy.toLowerCase().includes(searchValue);

      const matchesType =
        type === "all" || document.type.toLowerCase() === type;

      const matchesCategory =
        category === "all" ||
        document.category.toLowerCase() === category;

      const matchesStatus =
        status === "all" || document.status === status;

      return (
        matchesSearch &&
        matchesType &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [search, type, category, status]);

  const allSelected =
    filteredDocuments.length > 0 &&
    filteredDocuments.every((document) =>
      selectedDocuments.includes(document.id)
    );

  const handleSelectAll = () => {
    if (allSelected) {
      const visibleIds = filteredDocuments.map((document) => document.id);

      setSelectedDocuments((current) =>
        current.filter((id) => !visibleIds.includes(id))
      );

      return;
    }

    setSelectedDocuments((current) => [
      ...new Set([
        ...current,
        ...filteredDocuments.map((document) => document.id),
      ]),
    ]);
  };

  const handleSelectDocument = (id: number) => {
    setSelectedDocuments((current) =>
      current.includes(id)
        ? current.filter((documentId) => documentId !== id)
        : [...current, id]
    );
  };

  const handleUpload = () => {
    console.log("Upload documents");
  };

  const handleView = (document: DocumentItem) => {
    console.log("View document:", document);
  };

  const handleComment = (document: DocumentItem) => {
    console.log("Open document comments:", document);
  };

  return (
    <Page>
      <PageHeader>
        <HeaderContent>
          <PageTitle>Enterprise Documents</PageTitle>

          <PageDescription>
            Manage and process your organization's documents
          </PageDescription>
        </HeaderContent>

        <UploadButton onClick={handleUpload}>
          <Upload size={21} />
          Upload Documents
        </UploadButton>
      </PageHeader>

      <StatsGrid>
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            $background={stat.background}
            $border={stat.border}
            $color={stat.color}
          >
            <StatValue $color={stat.color}>
              {stat.value}
            </StatValue>

            <StatLabel $color={stat.color}>
              {stat.label}
            </StatLabel>
          </StatCard>
        ))}
      </StatsGrid>

      <FilterCard>
        <FilterRow>
          <SearchWrapper>
            <SearchIconBox>
              <Search size={20} />
            </SearchIconBox>

            <SearchInput
              type="text"
              placeholder="Search documents..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </SearchWrapper>

          <Select
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="all">All Types</option>
            <option value="contract">Contract</option>
            <option value="policy">Policy</option>
            <option value="report">Report</option>
          </Select>

          <Select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="vendor agreement">
              Vendor Agreement
            </option>
            <option value="hr">HR</option>
            <option value="security">Security</option>
          </Select>

          <Select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="all">All Status</option>
            <option value="processed">Processed</option>
            <option value="processing">Processing</option>
            <option value="failed">Failed</option>
          </Select>

          <MoreFilterButton>
            <Filter size={20} />
            More Filters
          </MoreFilterButton>
        </FilterRow>
      </FilterCard>

      <TableCard>
        <TableScroll>
          <Table>
            <TableHead>
              <tr>
                <TableHeader>
                  <Checkbox
                    type="checkbox"
                    checked={allSelected}
                    onChange={handleSelectAll}
                  />
                </TableHeader>

                <TableHeader>Document Name</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader>File Type</TableHeader>
                <TableHeader>Size</TableHeader>
                <TableHeader>Pages</TableHeader>
                <TableHeader>Uploaded By</TableHeader>
                <TableHeader>Date</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Actions</TableHeader>
              </tr>
            </TableHead>

            <TableBody>
              {filteredDocuments.map((document) => (
                <TableRow key={document.id}>
                  <TableCell>
                    <Checkbox
                      type="checkbox"
                      checked={selectedDocuments.includes(document.id)}
                      onChange={() =>
                        handleSelectDocument(document.id)
                      }
                    />
                  </TableCell>

                  <TableCell>
                    <DocumentName>
                      <DocumentIcon>
                        <FileText size={22} />
                      </DocumentIcon>

                      {document.name}
                    </DocumentName>
                  </TableCell>

                  <TableCell>{document.type}</TableCell>

                  <TableCell>
                    <CategoryText>
                      {document.category}
                    </CategoryText>
                  </TableCell>

                  <TableCell>{document.fileType}</TableCell>

                  <TableCell>{document.size}</TableCell>

                  <TableCell>{document.pages}</TableCell>

                  <TableCell>
                    <UserText>
                      {document.uploadedBy}
                    </UserText>
                  </TableCell>

                  <TableCell>
                    <DateText>{document.date}</DateText>
                  </TableCell>

                  <TableCell>
                    <StatusBadge $status={document.status}>
                      {getStatusIcon(document.status)}
                      {formatStatus(document.status)}
                    </StatusBadge>
                  </TableCell>

                  <TableCell>
                    <Actions>
                      <IconButton
                        type="button"
                        title="View document"
                        onClick={() => handleView(document)}
                      >
                        <Eye size={19} />
                      </IconButton>

                      <IconButton
                        type="button"
                        title="Comments"
                        onClick={() => handleComment(document)}
                      >
                        <MessageSquare size={19} />
                      </IconButton>
                    </Actions>
                  </TableCell>
                </TableRow>
              ))}

              {filteredDocuments.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={11}
                    style={{
                      textAlign: "center",
                      padding: "50px",
                    }}
                  >
                    No documents found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableScroll>
      </TableCard>
    </Page>
  );
};

export default Documents;