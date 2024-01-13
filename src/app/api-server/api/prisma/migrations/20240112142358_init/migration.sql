-- CreateTable
CREATE TABLE "Users" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "firebase_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Schedules" (
    "schedule_id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "day_of_week_id" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "Schedules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Schedules_day_of_week_id_fkey" FOREIGN KEY ("day_of_week_id") REFERENCES "DaysOfWeek" ("day_of_week_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Records" (
    "recordId" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "note" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "Records_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DaysOfWeek" (
    "day_of_week_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_firebase_id_key" ON "Users"("firebase_id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
