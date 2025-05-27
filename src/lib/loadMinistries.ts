import { parse } from "csv-parse/sync";

const ICONS = [
  "M12 3c-4.97 0-9 4.03-9 9 0 .702.099 1.383.271 2.041a3.999 3.999 0 015.557 5.56A8.968 8.968 0 0012 21a9 9 0 000-18zM7.5 9l1.044-3.131A5 5 0 0112 3.5l2.755 2.755a5 5 0 11-.46.123L7.5 9z",
  "M15 19.5a3 3 0 11-6 0 3 3 0 016 0zM4.5 9a3 3 0 100 6 3 3 0 000-6zM4.5 4.5a3 3 0 110 6 3 3 0 010-6zM12 13.5a3 3 0 110 6 3 3 0 010-6zM12 4.5a3 3 0 110 6 3 3 0 010-6zM19.5 9a3 3 0 100 6 3 3 0 000-6z",
  "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z",
  "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
];

export async function loadMinistriesFromCSV() {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vS048AnR8Va0MZId_sakX0VJEuY-i4tcc3dPxOFEabC-fqdH7vwa8XvQyPUamsfXiblR55s3W9SSXd4/pub?gid=0&single=true&output=csv"
  );
  const csvText = await res.text();

  const clean = (str: string) => str?.trim().replace(/^"|"$/g, "") || "";

  type Rec = { Nombre: string; Descripción: string };
  const records: Rec[] = parse(csvText, {
    columns: true,
    skip_empty_lines: true,
  });

  // Mapear y asignar un ícono random
  const ministries = records.map((rec) => ({
    name: clean(rec.Nombre),
    description: clean(rec.Descripción),
    icon: ICONS[Math.floor(Math.random() * ICONS.length)],
  }));

  return ministries;
}
