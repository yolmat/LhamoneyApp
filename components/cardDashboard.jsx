"use client";

import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardAction,
  CardFooter,
} from "./ui/card";
import {
  Ban,
  HandCoins,
  Landmark,
  PiggyBank,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export function CardDashboard({
  type,
  value,
  rangeTrace,
  range,
  lastMonth,
  year,
}) {
  let description;
  let Icon;

  switch (type) {
    case "balance":
      description = "saldo atual";
      Icon = Landmark;
      break;

    case "spent":
      description = "total gasto";
      Icon = ShoppingCart;
      break;

    case "received":
      description = "total recebido";
      Icon = HandCoins;
      break;

    case "lunge":
      description = "total investido";
      Icon = PiggyBank;
      break;

    default:
      description = "error";
      Icon = Ban;
      break;
  }

  let trace;
  if (rangeTrace === true) {
    trace = "+";
  } else {
    trace = "-";
  }

  return (
    <Card className="@container/card md:py-2 md:px-10 aspect-video rounded-xl justify-center size-full">
      <CardHeader>
        <CardDescription className="text-foreground/50 font-bold uppercase">
          {description}
        </CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          R${" "}
          {Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(value)}
        </CardTitle>
        <CardAction>
          <Icon className="text-foreground/50 font-bold" />
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm bg-background">
        <div className="line-clamp-1 flex gap-2 font-medium items-center">
          <div
            className={`flex items-center gap-2 rounded-xl p-1 ${rangeTrace ? "bg-footerCardReceived-text/10 text-footerCardReceived-text" : "bg-footerCardSpent-text/10 text-footerCardSpent-text"}`}
          >
            {rangeTrace ? (
              <TrendingUp className="size-4" />
            ) : (
              <TrendingDown className="size-4" />
            )}
            <p>
              {rangeTrace ? "+" : "-"}
              {range}%
            </p>
          </div>
          <p>
            vs {lastMonth}/{year}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
