# Migration `20201106154035`

This migration has been generated by Casper Engelmann at 11/6/2020, 4:40:35 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201106152550..20201106154035
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -35,4 +35,15 @@
   antiCSRFToken      String?
   publicData         String?
   privateData        String?
 }
+
+model Project {
+  id          Int      @default(autoincrement()) @id
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+  title       String   
+  category    String   
+  description String   
+  image       String   
+  link        String   
+}
```


