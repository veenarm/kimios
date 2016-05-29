/*
 * Kimios - Document Management System Software
 * Copyright (C) 2012-2013  DevLib'
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 2 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
kimios.i18n.Internationalization = function (config) {
    this.lang = config.lang;
    this.records = config.records;

    this.getLang = function () {
        return this.lang;
    };

    this.getValue = function (label) {
        for (var i = 0; i < this.records.length; i++) {
            var currentLabel = this.records[i].get('label');
            var currentValue = this.records[i].get('value');
            if (currentLabel == label) {
                return currentValue;
            }
        }
        return '[LABEL NOT FOUND]';
    };
};