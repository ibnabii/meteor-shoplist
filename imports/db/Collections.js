import { Mongo } from 'meteor/mongo';

export const ItemsCollection = new Mongo.Collection('items');
export const ListCollection = new Mongo.Collection('lists');
export const UsersCollection = new Mongo.Collection('users');
