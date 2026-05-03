import * as React from "react";
import {
  Bell,
  BellRing,
  ChartNoAxesColumnIncreasing,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";

const data = [
  {
    id: 1,
    title: "Salário",
    description:
      "Salário mensal empresa Lopes 10.093.090/0001-23 asdipoashdaksljdhaslkdjahsdlkasjhdaskjdhgasjkdhgaskdj",
    value: "3100",
    type: "received",
    data: "03/05/26",
  },
  {
    id: 2,
    title: "Supermercado",
    description: "Compra no mercado",
    value: "250",
    type: "spent",
    data: "04/05/26",
  },
  {
    id: 3,
    title: "Freelance",
    description: "Projeto landing page",
    value: "800",
    type: "received",
    data: "05/05/26",
  },
  {
    id: 4,
    title: "Netflix",
    description: "Assinatura mensal",
    value: "39",
    type: "spent",
    data: "06/05/26",
  },
  {
    id: 5,
    title: "Investimento",
    description: "Rendimento CDB",
    value: "120",
    type: "received",
    data: "07/05/26",
  },
  {
    id: 6,
    title: "Aluguel",
    description: "Pagamento aluguel",
    value: "1200",
    type: "spent",
    data: "08/05/26",
  },
  {
    id: 7,
    title: "Atualização",
    description: "Nova funcionalidade adicionada",
    value: "0",
    type: "news",
    data: "09/05/26",
  },
  {
    id: 8,
    title: "Restaurante",
    description: "Jantar fora",
    value: "90",
    type: "spent",
    data: "10/05/26",
  },
  {
    id: 9,
    title: "Dividendos",
    description: "Ações PETR4",
    value: "60",
    type: "received",
    data: "11/05/26",
  },
  {
    id: 10,
    title: "Spotify",
    description: "Plano premium",
    value: "21",
    type: "spent",
    data: "12/05/26",
  },
  {
    id: 11,
    title: "Aviso",
    description: "Sistema em manutenção",
    value: "0",
    type: "news",
    data: "13/05/26",
  },
  {
    id: 12,
    title: "Uber",
    description: "Corridas da semana",
    value: "75",
    type: "spent",
    data: "14/05/26",
  },
  {
    id: 13,
    title: "Venda",
    description: "Venda de produto online",
    value: "500",
    type: "received",
    data: "15/05/26",
  },
  {
    id: 14,
    title: "Energia",
    description: "Conta de luz",
    value: "180",
    type: "spent",
    data: "16/05/26",
  },
  {
    id: 15,
    title: "Atualização",
    description: "Correção de bugs",
    value: "0",
    type: "news",
    data: "17/05/26",
  },
  {
    id: 16,
    title: "Academia",
    description: "Mensalidade",
    value: "120",
    type: "spent",
    data: "18/05/26",
  },
  {
    id: 17,
    title: "PIX recebido",
    description: "Pagamento cliente",
    value: "300",
    type: "received",
    data: "19/05/26",
  },
  {
    id: 18,
    title: "Farmácia",
    description: "Medicamentos",
    value: "85",
    type: "spent",
    data: "20/05/26",
  },
  {
    id: 19,
    title: "Comunicado",
    description: "Nova política de uso",
    value: "0",
    type: "news",
    data: "21/05/26",
  },
  {
    id: 20,
    title: "Internet",
    description: "Plano mensal",
    value: "100",
    type: "spent",
    data: "22/05/26",
  },
  {
    id: 21,
    title: "Bônus",
    description: "Bônus trimestral",
    value: "700",
    type: "received",
    data: "23/05/26",
  },
  {
    id: 22,
    title: "Cinema",
    description: "Ingresso",
    value: "40",
    type: "spent",
    data: "24/05/26",
  },
  {
    id: 23,
    title: "Atualização",
    description: "Novo layout dashboard",
    value: "0",
    type: "news",
    data: "25/05/26",
  },
  {
    id: 24,
    title: "Padaria",
    description: "Café da manhã",
    value: "25",
    type: "spent",
    data: "26/05/26",
  },
  {
    id: 25,
    title: "Cashback",
    description: "Retorno cartão",
    value: "45",
    type: "received",
    data: "27/05/26",
  },
  {
    id: 26,
    title: "Gasolina",
    description: "Abastecimento",
    value: "200",
    type: "spent",
    data: "28/05/26",
  },
  {
    id: 27,
    title: "Aviso",
    description: "Atualização de termos",
    value: "0",
    type: "news",
    data: "29/05/26",
  },
  {
    id: 28,
    title: "iFood",
    description: "Pedido jantar",
    value: "60",
    type: "spent",
    data: "30/05/26",
  },
  {
    id: 29,
    title: "Freelance",
    description: "Design logo",
    value: "350",
    type: "received",
    data: "31/05/26",
  },
  {
    id: 30,
    title: "Seguro",
    description: "Seguro carro",
    value: "220",
    type: "spent",
    data: "01/06/26",
  },
  {
    id: 31,
    title: "Atualização",
    description: "Melhoria performance",
    value: "0",
    type: "news",
    data: "02/06/26",
  },
  {
    id: 32,
    title: "Roupas",
    description: "Compra online",
    value: "300",
    type: "spent",
    data: "03/06/26",
  },
  {
    id: 33,
    title: "Venda",
    description: "Marketplace",
    value: "900",
    type: "received",
    data: "04/06/26",
  },
  {
    id: 34,
    title: "Água",
    description: "Conta mensal",
    value: "70",
    type: "spent",
    data: "05/06/26",
  },
  {
    id: 35,
    title: "Comunicado",
    description: "Nova feature liberada",
    value: "0",
    type: "news",
    data: "06/06/26",
  },
  {
    id: 36,
    title: "Transporte",
    description: "Bilhete único",
    value: "150",
    type: "spent",
    data: "07/06/26",
  },
  {
    id: 37,
    title: "Dividendos",
    description: "ITUB4",
    value: "80",
    type: "received",
    data: "08/06/26",
  },
  {
    id: 38,
    title: "Petshop",
    description: "Ração",
    value: "110",
    type: "spent",
    data: "09/06/26",
  },
  {
    id: 39,
    title: "Aviso",
    description: "Instabilidade detectada",
    value: "0",
    type: "news",
    data: "10/06/26",
  },
  {
    id: 40,
    title: "Bar",
    description: "Happy hour",
    value: "95",
    type: "spent",
    data: "11/06/26",
  },
  {
    id: 41,
    title: "PIX",
    description: "Transferência recebida",
    value: "400",
    type: "received",
    data: "12/06/26",
  },
  {
    id: 42,
    title: "Telefone",
    description: "Plano móvel",
    value: "60",
    type: "spent",
    data: "13/06/26",
  },
  {
    id: 43,
    title: "Atualização",
    description: "Integração API",
    value: "0",
    type: "news",
    data: "14/06/26",
  },
  {
    id: 44,
    title: "Cursos",
    description: "Curso online",
    value: "200",
    type: "spent",
    data: "15/06/26",
  },
  {
    id: 45,
    title: "Freelance",
    description: "App mobile",
    value: "1200",
    type: "received",
    data: "16/06/26",
  },
  {
    id: 46,
    title: "Lazer",
    description: "Parque",
    value: "30",
    type: "spent",
    data: "17/06/26",
  },
  {
    id: 47,
    title: "Comunicado",
    description: "Sistema atualizado",
    value: "0",
    type: "news",
    data: "18/06/26",
  },
  {
    id: 48,
    title: "Mercado",
    description: "Compras semanais",
    value: "270",
    type: "spent",
    data: "19/06/26",
  },
  {
    id: 49,
    title: "Venda",
    description: "Produto digital",
    value: "650",
    type: "received",
    data: "20/06/26",
  },
  {
    id: 50,
    title: "Extra",
    description: "Receita adicional",
    value: "500",
    type: "received",
    data: "21/06/26",
  },
];

export function NotificationButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
        </Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false} className="flex flex-col">
        <div>
          <SheetHeader>
            <SheetTitle>Notificações</SheetTitle>
            <SheetDescription>
              Veja as suas ultimas notificações
            </SheetDescription>
          </SheetHeader>
        </div>

        <div className="flex-1 overflow-hidden wrap-anywhere">
          <ScrollArea className="h-full">
            <div className="flex flex-col p-4 gap-3">
              {data.map((i) => {
                const type = i.type;

                return (
                  <div
                    className={`flex w-full max-w-full px-5 py-3 gap-3 border rounded-xl
                        ${
                          type === "received"
                            ? "bg-notification-received/10 border-notification-received/30"
                            : type === "spent"
                              ? "bg-notification-spent/10 border-notification-spent/30"
                              : "bg-notification-news/10 border-notification-news/30"
                        }
                        `}
                    key={i.id}
                  >
                    <div
                      className={`p-2 h-fit w-fit rounded-full text-notification-icon
                        ${
                          type === "received"
                            ? "bg-notification-received/90"
                            : type === "spent"
                              ? "bg-notification-spent/90"
                              : "bg-notification-news/90"
                        }
                        `}
                    >
                      {type === "received" ? (
                        <ChartNoAxesColumnIncreasing className="opacity-80" />
                      ) : type === "spent" ? (
                        <ShoppingCart className="opacity-80" />
                      ) : (
                        <BellRing className="opacity-80" />
                      )}
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between">
                        <h1 className="font-bold">{i.title}</h1>
                        <h3 className="font-extralight opacity-50">{i.data}</h3>
                      </div>
                      <div className="h-fit">
                        <h3 className="font-light text-foreground/80 text-balance">
                          {i.description}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        <div className="border-t">
          <SheetFooter>
            <p className="opacity-30">Clique fora para fechar.</p>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
