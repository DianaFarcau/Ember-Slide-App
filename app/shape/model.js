import Model from 'ember-data/model';
import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  x: DS.attr('string'),
  y: DS.attr('string'),
  widht: DS.attr('string'),
  height: DS.attr('string'),
  type: DS.attr('string'),
  content: DS.attr('string'),
  shape: belongsTo('slide'),
});
