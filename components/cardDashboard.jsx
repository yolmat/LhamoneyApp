"use client";

import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardAction,
} from "./ui/card";
import {
  Ban,
  HandCoins,
  Landmark,
  PiggyBank,
  ShoppingCart,
} from "lucide-react";

export function CardDashboard({ type, value }) {
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

  return (
    <Card className="@container/card md:px-5 md:py-10 aspect-video rounded-xl">
      <CardHeader>
        <CardDescription className="text-foreground/50 font-bold uppercase">
          {description}
        </CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          R$ {value}
        </CardTitle>
        <CardAction>
          <Icon className="text-foreground/50 font-bold" />
        </CardAction>
      </CardHeader>
    </Card>
  );
}
