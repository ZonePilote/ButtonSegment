Ext.define('TileView.view.override.RestaurantList', {
    override: 'TileView.view.RestaurantList',
	viewConfig: {
            stripeRows: true,
            chunker: Ext.view.TableChunker
        },
        
        //plugins: [Ext.create('Ext.ux.grid.plugin.DragSelector')],
        
        features: [Ext.create('Ext.ux.grid.feature.Tileview', {
            viewMode: 'tileIcons',
            getAdditionalData: function(data, index, record, orig)
            {
                getRandomInt = function(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                
                var files = ['4d8f3b2d98a60f8e0a00004b','4d8f3b2d98a60f8e0a000041','4d8f3b2d98a60f8e0a000054','4d8f3b2e98a60f8e0a000071','4d8f3b2e98a60f8e0a000077','4d8f3b2f98a60f8e0a00008a','4d8f3b2f98a60f8e0a000080','4d8f3b3098a60f8e0a0000a4','4d8f3b3098a60f8e0a0000ac'];
                
                generateThumbnail = function()
                {
                    return files[getRandomInt(0, files.length - 1)] + '.jpg';
                };
                
                if(this.viewMode)
                {
                    return {
                        thumbnails: generateThumbnail(),
                        rating: 'Rating: ' + getRandomInt(1, 9)
                    };
                }
                return {};
            },
            viewTpls:
            {
                mediumIcons: [
                    '<td class="{cls} ux-explorerview-medium-icon-row">',
                    '<table class="x-grid-row-table">',
                    '<tbody>',
                    '<tr>',
                    '<td class="x-grid-col x-grid-cell ux-explorerview-icon" style="background: url(&quot;thumbnails/medium_{thumbnails}&quot;) no-repeat scroll 50% 100% transparent;">',
                    '</td>',
                    '</tr>',
                    '<tr>',
                    '<td class="x-grid-col x-grid-cell">',
                    '<div class="x-grid-cell-inner" unselectable="on">{name}</div>',
                    '</td>',
                    '</tr>',
                    '</tbody>',
                    '</table>',
                    '</td>'].join(''),
                
                tileIcons: [
                    '<td class="{cls} ux-explorerview-detailed-icon-row">',
                    '<table class="x-grid-row-table">',
                    '<tbody>',
                    '<tr>',
                    '<td class="x-grid-col x-grid-cell ux-explorerview-icon" style="background: url(&quot;thumbnails/tile_{thumbnails}&quot;) no-repeat scroll 50% 50% transparent;">',
                    '</td>',
                    
                    '<td class="x-grid-col x-grid-cell">',
                    '<div class="x-grid-cell-inner" unselectable="on">{name}<br><span>{rating}<br>{cuisine}</span></div>',
                    '</td>',
                    '</tr>',
                    '</tbody>',
                    '</table>',
                    '</td>'].join('')
                
            }
        }),
                   {
                       ftype: 'grouping',
                       groupHeaderTpl: 'Cuisine: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
                       disabled: false
                   }]
    
});