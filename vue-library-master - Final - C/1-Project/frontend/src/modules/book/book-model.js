import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.book.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.book.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  callNumber: new StringField('callNumber', label('callNumber'), {
    "required": true,
    "max": 50,
    "min": 3
  }),
  title: new StringField('title', label('title'), {
    "required": true,
    "max": 255
  }),
  author: new StringField('author', label('author'), {
    "required": true,
    "max": 255
  }),
  edition: new StringField('edition', label('edition'), {
    "required": true,
    "max": 30
  }),
  publisher: new StringField('publisher', label('publisher'), {
    "required": true,
    "max": 255
  }),
  copyright: new StringField('copyright', label('copyright'), {
    "required": true,
    "max": 50
  }),
  accession_number: new StringField('accession_number', label('accession_number'), {
    "required": true,
    "max": 50,
    "min": 3,
  }),
  numberOfCopies: new IntegerField('numberOfCopies', label('numberOfCopies'), {
    "required": true,
    "min": 1
  }),
  stock: new IntegerField('stock', label('stock'), {}),
  images: new ImagesField('images', label('images'), 'book/images',{
    "max": 3,
    "size": 3000000
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'available', label: enumeratorLabel('status', 'available') },
    { id: 'unavailable', label: enumeratorLabel('status', 'unavailable') },
  ],{}),
  circulationType: new EnumeratorField('circulationType', 'Circulation Type', [
    { id: 'Circulation Collection', label: 'Circulation Collection' },
    { id: 'Reference Collection', label: 'Reference Collection' },
  ],{}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  numberOfCopiesRange: new IntegerRangeField(
    'numberOfCopiesRange',
    label('numberOfCopiesRange'),
  ),
  stockRange: new IntegerRangeField(
    'stockRange',
    label('stockRange'),
  ),
};

export class BookModel extends GenericModel {
  static get fields() {
    return fields;
  }
}