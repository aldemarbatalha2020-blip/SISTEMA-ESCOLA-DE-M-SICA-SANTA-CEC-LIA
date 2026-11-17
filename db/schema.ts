import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const members=sqliteTable('members',{email:text('email').primaryKey(),name:text('name').notNull(),role:text('role').notNull(),uid:text('uid'),active:integer('active').notNull().default(1)});
export const records=sqliteTable('records',{id:text('id').primaryKey(),kind:text('kind').notNull(),owner:text('owner').notNull(),data:text('data').notNull(),version:integer('version').notNull().default(1),created:text('created').notNull()});
export const config=sqliteTable('config',{id:text('id').primaryKey(),data:text('data').notNull()});
export const files=sqliteTable('files',{id:text('id').primaryKey(),owner:text('owner').notNull(),name:text('name').notNull(),mime:text('mime').notNull(),scope:text('scope').notNull(),size:integer('size').notNull()});
export const audit=sqliteTable('audit',{id:text('id').primaryKey(),actor:text('actor').notNull(),action:text('action').notNull(),created:text('created').notNull()});
