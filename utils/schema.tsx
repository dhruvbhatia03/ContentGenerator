import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput=pgTable('AIOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData'),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug'),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt')
})

export const UserSubscription=pgTable('UserSubscription',{
    id:serial('id').primaryKey(),
    email:varchar('email'),
    userName:varchar('userName'),
    active:boolean('active'),
    paymentId:varchar('paymentId'),
    joinDate:varchar('joinData')
})