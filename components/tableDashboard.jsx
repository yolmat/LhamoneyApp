import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { House } from "lucide-react";

const invoices = [
  {
    icon: House,
    transation: "Supermercado",
    category: "Alimentação",
    date: "12/01/26",
    status: "Pago",
    amount: 180.75,
    movement: 1,
  },
  {
    icon: House,
    transation: "Internet",
    category: "Serviços",
    date: "25/01/26",
    status: "Pendente",
    amount: 99.9,
    movement: 1,
  },
  {
    icon: House,
    transation: "Cinema",
    category: "Lazer",
    date: "14/02/26",
    status: "Pago",
    amount: 45.0,
    movement: 1,
  },
  {
    icon: House,
    transation: "Salário",
    category: "Renda",
    date: "05/03/26",
    status: "Recebido",
    amount: 3500.0,
    movement: 0,
  },
  {
    icon: House,
    transation: "Uber",
    category: "Transporte",
    date: "18/03/26",
    status: "Pago",
    amount: 32.4,
    movement: 1,
  },
  {
    icon: House,
    transation: "Academia",
    category: "Saúde",
    date: "02/04/26",
    status: "Atrasado",
    amount: 120.0,
    movement: 1,
  },
  {
    icon: House,
    transation: "Freelance",
    category: "Renda Extra",
    date: "22/04/26",
    status: "Recebido",
    amount: 800.5,
    movement: 0,
  },
  {
    icon: House,
    transation: "Restaurante",
    category: "Alimentação",
    date: "10/05/26",
    status: "Pago",
    amount: 95.2,
    movement: 1,
  },
  {
    icon: House,
    transation: "Energia",
    category: "Contas",
    date: "28/06/26",
    status: "Pendente",
    amount: 210.67,
    movement: 1,
  },
  {
    icon: House,
    transation: "Viagem",
    category: "Lazer",
    date: "15/07/26",
    status: "Planejado",
    amount: 1500.0,
    movement: 1,
  },
];

export function TableDashboard() {
  return (
    <Table>
      <TableCaption>As suas ultimas 15 transações</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Transation</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Moviment</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.transation}</TableCell>
            <TableCell>{invoice.category}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.movement}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
