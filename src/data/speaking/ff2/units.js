// src/data/speaking/ff2/units.js
// Oxford Family & Friends 2 — Starter + 15 Units
//
// ❌ Starter  Hello Again!          ← chờ nội dung
// ❌ Unit 1   My Things             ← chờ nội dung
// ❌ Unit 2   My Classroom          ← chờ nội dung
// ❌ Unit 3   My Home               ← chờ nội dung
// ❌ Unit 4   My Town               ← chờ nội dung
// ❌ Unit 5   Helping at Home       ← chờ nội dung
// ❌ Unit 6   Food                  ← chờ nội dung
// ❌ Unit 7   Shopping              ← chờ nội dung
// ❌ Unit 8   At the Café           ← chờ nội dung
// ❌ Unit 9   Sports                ← chờ nội dung
// ❌ Unit 10  Animals               ← chờ nội dung
// ❌ Unit 11  The Weather           ← chờ nội dung
// ❌ Unit 12  Clothes               ← chờ nội dung
// ❌ Unit 13  Transport             ← chờ nội dung
// ❌ Unit 14  Holidays              ← chờ nội dung
// ❌ Unit 15  Let's Celebrate!      ← chờ nội dung
//
// Khi có nội dung: paste từng batch 3 unit theo prompt mẫu
// (xem lịch sử chat để lấy prompt cho NotebookLM)

export const FF2_UNITS = [];

export const getUnitById = (id) => FF2_UNITS.find(u => u.id === id);
