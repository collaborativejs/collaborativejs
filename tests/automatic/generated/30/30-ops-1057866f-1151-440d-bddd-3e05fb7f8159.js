var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - ins/undo/ins/ins/ins/undo/redo/undo/rm/ins/rm/ins/rm/undo/rm/ins/ins/ins/rm/ins/undo/ins/rm/ins/ins/rm/ins/ins/undo/rm - 30-ops-1057866f-1151-440d-bddd-3e05fb7f8159", function() {
  var doc1 = new clv.string.Document("84172c80-5380-11e7-9bf2-c164e5c0623d", 0, null);
  var doc2 = new clv.string.Document("84190140-5380-11e7-9bf2-c164e5c0623d", 0, null);
  var doc3 = new clv.string.Document("841a60d0-5380-11e7-9bf2-c164e5c0623d", 0, null);
  var doc4 = new clv.string.Document("841b7240-5380-11e7-9bf2-c164e5c0623d", 0, null);
  var doc5 = new clv.string.Document("841caac0-5380-11e7-9bf2-c164e5c0623d", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";
  var data5 = "Hello World";

  var serverData = {"id":"cf3fed24-996e-461e-b929-50351aaa2e2c","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 84172c80-5380-11e7-9bf2-c164e5c0623d operations should be executed without errors", function() {
    var update1 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rte"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":5,"value":"tqq"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update2 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"q"},"execOrder":2},{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"rte"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update5 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"tqq"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":8}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":3,"value":"r"},"execOrder":9}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":5,"value":"ye"},"execOrder":10}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"yy"},"execOrder":11}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":3,"value":"rte"},"execOrder":12}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"wyy"},"execOrder":13}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":16,"value":"rl"},"execOrder":14},{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":6,"value":"er"},"execOrder":15}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"yel"},"execOrder":16}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":17}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

    var update16 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":15,"value":"ywt"},"execOrder":18}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.string.exec(data1, updateTuple16.toExec);

    var update17 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":1,"at":3,"value":"rte"},"execOrder":19}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.string.exec(data1, updateTuple17.toExec);

    var update18 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":1,"value":"wyy"},"execOrder":20}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.string.exec(data1, updateTuple18.toExec);

    var update19 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":12,"value":"www"},"execOrder":21}];
    var updateTuple19 = doc1.update(update19);
    data1 = clv.string.exec(data1, updateTuple19.toExec);

    var update20 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":22}];
    var updateTuple20 = doc1.update(update20);
    data1 = clv.string.exec(data1, updateTuple20.toExec);

    var update21 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":13,"value":"od"},"execOrder":23}];
    var updateTuple21 = doc1.update(update21);
    data1 = clv.string.exec(data1, updateTuple21.toExec);

    var update22 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"Hlo"},"execOrder":24},{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":13,"value":"tre"},"execOrder":25}];
    var updateTuple22 = doc1.update(update22);
    data1 = clv.string.exec(data1, updateTuple22.toExec);

    var update23 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"wtq"},"execOrder":26}];
    var updateTuple23 = doc1.update(update23);
    data1 = clv.string.exec(data1, updateTuple23.toExec);

    var commit3 = [{"type":0,"at":4,"value":"e"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update24 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":7,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"t"},"execOrder":27},{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"e"},"execOrder":28}];
    var updateTuple24 = doc1.update(update24);
    data1 = clv.string.exec(data1, updateTuple24.toExec);

    var commit4 = [{"type":0,"at":16,"value":"ew"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update25 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"y t"},"execOrder":29},{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":16,"value":"ew"},"execOrder":30}];
    var updateTuple25 = doc1.update(update25);
    data1 = clv.string.exec(data1, updateTuple25.toExec);

  });

  it("Site 84190140-5380-11e7-9bf2-c164e5c0623d operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":3,"value":"rte"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rte"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"q"},"execOrder":2},{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":3}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commitTuple2 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update4 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"rte"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"tqq"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":3,"value":"r"},"execOrder":9}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var commitTuple3 = doc2.redo();
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update9 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":5,"value":"ye"},"execOrder":10}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var update10 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"yy"},"execOrder":11},{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":3,"value":"rte"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"wyy"},"execOrder":13},{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":16,"value":"rl"},"execOrder":14}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":6,"value":"er"},"execOrder":15}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"yel"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var commitTuple4 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update14 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":17}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":15,"value":"ywt"},"execOrder":18},{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":1,"at":3,"value":"rte"},"execOrder":19}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.string.exec(data2, updateTuple15.toExec);

    var update16 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":1,"value":"wyy"},"execOrder":20}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.string.exec(data2, updateTuple16.toExec);

    var commit5 = [{"type":1,"at":13,"value":"od"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var update17 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":12,"value":"www"},"execOrder":21}];
    var updateTuple17 = doc2.update(update17);
    data2 = clv.string.exec(data2, updateTuple17.toExec);

    var update18 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":22},{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":13,"value":"od"},"execOrder":23}];
    var updateTuple18 = doc2.update(update18);
    data2 = clv.string.exec(data2, updateTuple18.toExec);

    var commit6 = [{"type":0,"at":13,"value":"tre"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update19 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"Hlo"},"execOrder":24},{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":13,"value":"tre"},"execOrder":25}];
    var updateTuple19 = doc2.update(update19);
    data2 = clv.string.exec(data2, updateTuple19.toExec);

    var update20 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"wtq"},"execOrder":26}];
    var updateTuple20 = doc2.update(update20);
    data2 = clv.string.exec(data2, updateTuple20.toExec);

    var update21 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":7,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"t"},"execOrder":27},{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"e"},"execOrder":28}];
    var updateTuple21 = doc2.update(update21);
    data2 = clv.string.exec(data2, updateTuple21.toExec);

    var commit7 = [{"type":1,"at":6,"value":"y t"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = clv.string.exec(data2, commitTuple7.toExec);

    var update22 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"y t"},"execOrder":29}];
    var updateTuple22 = doc2.update(update22);
    data2 = clv.string.exec(data2, updateTuple22.toExec);

    var update23 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":16,"value":"ew"},"execOrder":30}];
    var updateTuple23 = doc2.update(update23);
    data2 = clv.string.exec(data2, updateTuple23.toExec);

  });

  it("Site 841a60d0-5380-11e7-9bf2-c164e5c0623d operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":5,"value":"q"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update1 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rte"},"execOrder":1},{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"q"},"execOrder":2}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":3}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var commit2 = [{"type":1,"at":3,"value":"r"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var update3 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"rte"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"tqq"},"execOrder":6}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":7}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var commitTuple3 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple3.toExec);

    var update7 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":8},{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":3,"value":"r"},"execOrder":9}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":5,"value":"ye"},"execOrder":10}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"yy"},"execOrder":11},{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":3,"value":"rte"},"execOrder":12}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.string.exec(data3, updateTuple9.toExec);

    var commit4 = [{"type":1,"at":16,"value":"rl"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = clv.string.exec(data3, commitTuple4.toExec);

    var commit5 = [{"type":0,"at":6,"value":"er"}];
    var commitTuple5 = doc3.commit(commit5);
    data3 = clv.string.exec(data3, commitTuple5.toExec);

    var update10 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"wyy"},"execOrder":13},{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":16,"value":"rl"},"execOrder":14}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.string.exec(data3, updateTuple10.toExec);

    var update11 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":6,"value":"er"},"execOrder":15}];
    var updateTuple11 = doc3.update(update11);
    data3 = clv.string.exec(data3, updateTuple11.toExec);

    var commit6 = [{"type":0,"at":15,"value":"ywt"}];
    var commitTuple6 = doc3.commit(commit6);
    data3 = clv.string.exec(data3, commitTuple6.toExec);

    var update12 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"yel"},"execOrder":16},{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":17}];
    var updateTuple12 = doc3.update(update12);
    data3 = clv.string.exec(data3, updateTuple12.toExec);

    var update13 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":15,"value":"ywt"},"execOrder":18}];
    var updateTuple13 = doc3.update(update13);
    data3 = clv.string.exec(data3, updateTuple13.toExec);

    var update14 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":1,"at":3,"value":"rte"},"execOrder":19}];
    var updateTuple14 = doc3.update(update14);
    data3 = clv.string.exec(data3, updateTuple14.toExec);

    var commit7 = [{"type":0,"at":12,"value":"www"}];
    var commitTuple7 = doc3.commit(commit7);
    data3 = clv.string.exec(data3, commitTuple7.toExec);

    var update15 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":1,"value":"wyy"},"execOrder":20},{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":12,"value":"www"},"execOrder":21}];
    var updateTuple15 = doc3.update(update15);
    data3 = clv.string.exec(data3, updateTuple15.toExec);

    var update16 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":22},{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":13,"value":"od"},"execOrder":23}];
    var updateTuple16 = doc3.update(update16);
    data3 = clv.string.exec(data3, updateTuple16.toExec);

    var update17 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"Hlo"},"execOrder":24}];
    var updateTuple17 = doc3.update(update17);
    data3 = clv.string.exec(data3, updateTuple17.toExec);

    var update18 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":13,"value":"tre"},"execOrder":25}];
    var updateTuple18 = doc3.update(update18);
    data3 = clv.string.exec(data3, updateTuple18.toExec);

    var commit8 = [{"type":1,"at":7,"value":"t"}];
    var commitTuple8 = doc3.commit(commit8);
    data3 = clv.string.exec(data3, commitTuple8.toExec);

    var update19 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"wtq"},"execOrder":26},{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":7,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"t"},"execOrder":27}];
    var updateTuple19 = doc3.update(update19);
    data3 = clv.string.exec(data3, updateTuple19.toExec);

    var update20 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"e"},"execOrder":28}];
    var updateTuple20 = doc3.update(update20);
    data3 = clv.string.exec(data3, updateTuple20.toExec);

    var update21 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"y t"},"execOrder":29}];
    var updateTuple21 = doc3.update(update21);
    data3 = clv.string.exec(data3, updateTuple21.toExec);

    var update22 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":16,"value":"ew"},"execOrder":30}];
    var updateTuple22 = doc3.update(update22);
    data3 = clv.string.exec(data3, updateTuple22.toExec);

  });

  it("Site 841b7240-5380-11e7-9bf2-c164e5c0623d operations should be executed without errors", function() {
    var update1 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rte"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"q"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var update3 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":4}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var update5 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"rte"},"execOrder":5}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"tqq"},"execOrder":6}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var commit1 = [{"type":0,"at":4,"value":"w"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var commitTuple2 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple2.toExec);

    var update7 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":7}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":8}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

    var commit3 = [{"type":0,"at":5,"value":"ye"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = clv.string.exec(data4, commitTuple3.toExec);

    var update9 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":3,"value":"r"},"execOrder":9}];
    var updateTuple9 = doc4.update(update9);
    data4 = clv.string.exec(data4, updateTuple9.toExec);

    var update10 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":5,"value":"ye"},"execOrder":10}];
    var updateTuple10 = doc4.update(update10);
    data4 = clv.string.exec(data4, updateTuple10.toExec);

    var update11 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"yy"},"execOrder":11},{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":3,"value":"rte"},"execOrder":12}];
    var updateTuple11 = doc4.update(update11);
    data4 = clv.string.exec(data4, updateTuple11.toExec);

    var update12 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"wyy"},"execOrder":13},{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":16,"value":"rl"},"execOrder":14}];
    var updateTuple12 = doc4.update(update12);
    data4 = clv.string.exec(data4, updateTuple12.toExec);

    var commit4 = [{"type":1,"at":3,"value":"yel"}];
    var commitTuple4 = doc4.commit(commit4);
    data4 = clv.string.exec(data4, commitTuple4.toExec);

    var commit5 = [{"type":0,"at":5,"value":"r"}];
    var commitTuple5 = doc4.commit(commit5);
    data4 = clv.string.exec(data4, commitTuple5.toExec);

    var update13 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":6,"value":"er"},"execOrder":15},{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"yel"},"execOrder":16}];
    var updateTuple13 = doc4.update(update13);
    data4 = clv.string.exec(data4, updateTuple13.toExec);

    var update14 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":17}];
    var updateTuple14 = doc4.update(update14);
    data4 = clv.string.exec(data4, updateTuple14.toExec);

    var update15 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":15,"value":"ywt"},"execOrder":18}];
    var updateTuple15 = doc4.update(update15);
    data4 = clv.string.exec(data4, updateTuple15.toExec);

    var update16 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":1,"at":3,"value":"rte"},"execOrder":19}];
    var updateTuple16 = doc4.update(update16);
    data4 = clv.string.exec(data4, updateTuple16.toExec);

    var commit6 = [{"type":0,"at":7,"value":"rey"}];
    var commitTuple6 = doc4.commit(commit6);
    data4 = clv.string.exec(data4, commitTuple6.toExec);

    var update17 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":1,"value":"wyy"},"execOrder":20}];
    var updateTuple17 = doc4.update(update17);
    data4 = clv.string.exec(data4, updateTuple17.toExec);

    var update18 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":12,"value":"www"},"execOrder":21},{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":22}];
    var updateTuple18 = doc4.update(update18);
    data4 = clv.string.exec(data4, updateTuple18.toExec);

    var update19 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":13,"value":"od"},"execOrder":23}];
    var updateTuple19 = doc4.update(update19);
    data4 = clv.string.exec(data4, updateTuple19.toExec);

    var update20 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"Hlo"},"execOrder":24}];
    var updateTuple20 = doc4.update(update20);
    data4 = clv.string.exec(data4, updateTuple20.toExec);

    var commit7 = [{"type":1,"at":6,"value":"wtq"}];
    var commitTuple7 = doc4.commit(commit7);
    data4 = clv.string.exec(data4, commitTuple7.toExec);

    var update21 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":13,"value":"tre"},"execOrder":25},{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"wtq"},"execOrder":26}];
    var updateTuple21 = doc4.update(update21);
    data4 = clv.string.exec(data4, updateTuple21.toExec);

    var update22 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":7,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"t"},"execOrder":27},{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"e"},"execOrder":28}];
    var updateTuple22 = doc4.update(update22);
    data4 = clv.string.exec(data4, updateTuple22.toExec);

    var update23 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"y t"},"execOrder":29}];
    var updateTuple23 = doc4.update(update23);
    data4 = clv.string.exec(data4, updateTuple23.toExec);

    var update24 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":16,"value":"ew"},"execOrder":30}];
    var updateTuple24 = doc4.update(update24);
    data4 = clv.string.exec(data4, updateTuple24.toExec);

  });

  it("Site 841caac0-5380-11e7-9bf2-c164e5c0623d operations should be executed without errors", function() {
    var update1 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rte"},"execOrder":1}];
    var updateTuple1 = doc5.update(update1);
    data5 = clv.string.exec(data5, updateTuple1.toExec);

    var update2 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"q"},"execOrder":2}];
    var updateTuple2 = doc5.update(update2);
    data5 = clv.string.exec(data5, updateTuple2.toExec);

    var update3 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":3}];
    var updateTuple3 = doc5.update(update3);
    data5 = clv.string.exec(data5, updateTuple3.toExec);

    var update4 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":4}];
    var updateTuple4 = doc5.update(update4);
    data5 = clv.string.exec(data5, updateTuple4.toExec);

    var update5 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"rte"},"execOrder":5}];
    var updateTuple5 = doc5.update(update5);
    data5 = clv.string.exec(data5, updateTuple5.toExec);

    var update6 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"tqq"},"execOrder":6}];
    var updateTuple6 = doc5.update(update6);
    data5 = clv.string.exec(data5, updateTuple6.toExec);

    var update7 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":7}];
    var updateTuple7 = doc5.update(update7);
    data5 = clv.string.exec(data5, updateTuple7.toExec);

    var update8 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":8}];
    var updateTuple8 = doc5.update(update8);
    data5 = clv.string.exec(data5, updateTuple8.toExec);

    var update9 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":3,"value":"r"},"execOrder":9}];
    var updateTuple9 = doc5.update(update9);
    data5 = clv.string.exec(data5, updateTuple9.toExec);

    var commit1 = [{"type":0,"at":7,"value":"yy"}];
    var commitTuple1 = doc5.commit(commit1);
    data5 = clv.string.exec(data5, commitTuple1.toExec);

    var update10 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":5,"value":"ye"},"execOrder":10}];
    var updateTuple10 = doc5.update(update10);
    data5 = clv.string.exec(data5, updateTuple10.toExec);

    var update11 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"yy"},"execOrder":11}];
    var updateTuple11 = doc5.update(update11);
    data5 = clv.string.exec(data5, updateTuple11.toExec);

    var commit2 = [{"type":0,"at":1,"value":"wyy"}];
    var commitTuple2 = doc5.commit(commit2);
    data5 = clv.string.exec(data5, commitTuple2.toExec);

    var update12 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":3,"value":"rte"},"execOrder":12}];
    var updateTuple12 = doc5.update(update12);
    data5 = clv.string.exec(data5, updateTuple12.toExec);

    var update13 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"wyy"},"execOrder":13}];
    var updateTuple13 = doc5.update(update13);
    data5 = clv.string.exec(data5, updateTuple13.toExec);

    var update14 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":16,"value":"rl"},"execOrder":14}];
    var updateTuple14 = doc5.update(update14);
    data5 = clv.string.exec(data5, updateTuple14.toExec);

    var update15 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":6,"value":"er"},"execOrder":15}];
    var updateTuple15 = doc5.update(update15);
    data5 = clv.string.exec(data5, updateTuple15.toExec);

    var update16 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"yel"},"execOrder":16}];
    var updateTuple16 = doc5.update(update16);
    data5 = clv.string.exec(data5, updateTuple16.toExec);

    var update17 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":17}];
    var updateTuple17 = doc5.update(update17);
    data5 = clv.string.exec(data5, updateTuple17.toExec);

    var update18 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":15,"value":"ywt"},"execOrder":18}];
    var updateTuple18 = doc5.update(update18);
    data5 = clv.string.exec(data5, updateTuple18.toExec);

    var commitTuple3 = doc5.undo();
    data5 = clv.string.exec(data5, commitTuple3.toExec);

    var update19 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":1,"at":3,"value":"rte"},"execOrder":19}];
    var updateTuple19 = doc5.update(update19);
    data5 = clv.string.exec(data5, updateTuple19.toExec);

    var update20 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":1,"value":"wyy"},"execOrder":20}];
    var updateTuple20 = doc5.update(update20);
    data5 = clv.string.exec(data5, updateTuple20.toExec);

    var update21 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":12,"value":"www"},"execOrder":21},{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":22}];
    var updateTuple21 = doc5.update(update21);
    data5 = clv.string.exec(data5, updateTuple21.toExec);

    var commit4 = [{"type":1,"at":0,"value":"Hlo"}];
    var commitTuple4 = doc5.commit(commit4);
    data5 = clv.string.exec(data5, commitTuple4.toExec);

    var update22 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":13,"value":"od"},"execOrder":23}];
    var updateTuple22 = doc5.update(update22);
    data5 = clv.string.exec(data5, updateTuple22.toExec);

    var update23 = [{"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"Hlo"},"execOrder":24}];
    var updateTuple23 = doc5.update(update23);
    data5 = clv.string.exec(data5, updateTuple23.toExec);

    var update24 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":13,"value":"tre"},"execOrder":25}];
    var updateTuple24 = doc5.update(update24);
    data5 = clv.string.exec(data5, updateTuple24.toExec);

    var update25 = [{"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"wtq"},"execOrder":26}];
    var updateTuple25 = doc5.update(update25);
    data5 = clv.string.exec(data5, updateTuple25.toExec);

    var update26 = [{"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":7,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"t"},"execOrder":27}];
    var updateTuple26 = doc5.update(update26);
    data5 = clv.string.exec(data5, updateTuple26.toExec);

    var update27 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"e"},"execOrder":28}];
    var updateTuple27 = doc5.update(update27);
    data5 = clv.string.exec(data5, updateTuple27.toExec);

    var update28 = [{"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"y t"},"execOrder":29}];
    var updateTuple28 = doc5.update(update28);
    data5 = clv.string.exec(data5, updateTuple28.toExec);

    var update29 = [{"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":16,"value":"ew"},"execOrder":30}];
    var updateTuple29 = doc5.update(update29);
    data5 = clv.string.exec(data5, updateTuple29.toExec);

  });

  it("Server operations should be executed without errors", function() {
    function updateServer(op) {
      var server = new clv.string.Document(null, serverData.execOrder, serverData.context);
      server.update(serverData.ops);
      var serverTuple = server.update(op);
      serverData.data = clv.string.exec(serverData.data, serverTuple.toExec);
      serverData.context = server.getContext();
      serverData.ops.push(op);
      serverData.execOrder = server.getExecOrder();
    }

    var serverUpdate0 = {"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rte"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"q"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"rte"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"tqq"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":3,"value":"r"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":5,"value":"ye"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"yy"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":3,"value":"rte"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"wyy"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":16,"value":"rl"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":6,"value":"er"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"yel"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":15,"value":"ywt"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":1,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":1,"at":3,"value":"rte"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":1,"value":"wyy"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":12,"value":"www"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":5,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":13,"value":"od"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"841caac0-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"Hlo"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":13,"value":"tre"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"841b7240-5380-11e7-9bf2-c164e5c0623d","seqId":6,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"wtq"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"841a60d0-5380-11e7-9bf2-c164e5c0623d","seqId":7,"context":{"vector":{"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"t"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":2,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"e"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"84190140-5380-11e7-9bf2-c164e5c0623d","seqId":4,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"y t"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"84172c80-5380-11e7-9bf2-c164e5c0623d","seqId":3,"context":{"vector":{"84190140-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"84172c80-5380-11e7-9bf2-c164e5c0623d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"841a60d0-5380-11e7-9bf2-c164e5c0623d":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"841b7240-5380-11e7-9bf2-c164e5c0623d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"841caac0-5380-11e7-9bf2-c164e5c0623d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":5},"invCount":0,"load":{"type":0,"at":16,"value":"ew"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
    assert.equal(data5, serverData.data, "Site 5 data should be equal to server");
  });

});
