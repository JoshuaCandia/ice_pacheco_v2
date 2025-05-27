import { parse } from "csv-parse/sync";

export async function loadActivitiesFromCSV() {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR4XzDJqvpAjvn_0i5ywXWKon4O04mn0IYu8esPjH8U4BM4dHB84jZVWLm_8isG95pbbjGt3QTTiZ5E/pub?gid=0&single=true&output=csv"
  );
  const csvText = await res.text();

  const clean = (str: string) => str?.trim().replace(/^"|"$/g, "") || "";

  const records: {
    Día: string;
    Hora: string;
    Nombre: string;
    Descripción: string;
  }[] = parse(csvText, {
    columns: true,
    skip_empty_lines: true,
  });

  // Agrupar por día
  const grouped: Record<
    string,
    { time: string; name: string; description: string }[]
  > = {};
  for (const record of records) {
    const day = clean(record["Día"]);
    if (!grouped[day]) grouped[day] = [];

    grouped[day].push({
      time: clean(record["Hora"]),
      name: clean(record["Nombre"]),
      description: clean(record["Descripción"]),
    });
  }

  // Convertir a array ordenado por día
  const orderedDays = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const activities = orderedDays
    .filter((d) => grouped[d])
    .map((day) => ({
      day,
      items: grouped[day],
    }));

  return activities;
}
