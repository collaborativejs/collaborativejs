var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - ins/undo/redo/undo/ins/ins/rm/rm/rm/undo/undo/ins/ins/undo/redo/ins/ins/rm/ins/ins/ins/undo/undo/ins/rm/ins/undo/rm/rm/ins - 30-ops-ba9c6146-1d8d-405a-b589-2325594333b2", function() {
  var doc1 = new clv.string.Document("e6c44070-5380-11e7-9e59-557d0f5b45e8", 0, null);
  var doc2 = new clv.string.Document("e6c66350-5380-11e7-9e59-557d0f5b45e8", 0, null);
  var doc3 = new clv.string.Document("e6c7c2e0-5380-11e7-9e59-557d0f5b45e8", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";

  var serverData = {"id":"fe763c7d-20ac-44a5-9b36-b13e12b9a48b","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site e6c44070-5380-11e7-9e59-557d0f5b45e8 operations should be executed without errors", function() {
    var update1 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"ty"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":6,"value":"w"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update2 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"y"},"execOrder":2},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"ey"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"ey"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":12,"value":"y"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update6 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"ty"},"execOrder":7},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"w"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"yr"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var commitTuple3 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update9 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":2,"value":"ty"},"execOrder":11},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":6,"value":"w"},"execOrder":12}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var commit5 = [{"type":0,"at":10,"value":"eer"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update10 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":3,"load":{"type":1,"at":6,"value":"w"},"execOrder":13}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"eer"},"execOrder":14}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var commit6 = [{"type":0,"at":4,"value":"tqe"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var commit7 = [{"type":1,"at":10,"value":"r"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var update12 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"r"},"execOrder":15},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"tqe"},"execOrder":16}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":10,"value":"r"},"execOrder":17}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var commit8 = [{"type":1,"at":9,"value":"lol"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update14 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":7,"value":"r"},"execOrder":18}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"r"},"execOrder":19},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":9,"value":"lol"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

    var update16 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"ry"},"execOrder":21},{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"try"},"execOrder":22}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.string.exec(data1, updateTuple16.toExec);

    var commit9 = [{"type":1,"at":8,"value":"de"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update17 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":23},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":1,"at":8,"value":"de"},"execOrder":24}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.string.exec(data1, updateTuple17.toExec);

    var commitTuple10 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var update18 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"ytq"},"execOrder":25}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.string.exec(data1, updateTuple18.toExec);

    var commitTuple11 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple11.toExec);

    var update19 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":7,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"ele"},"execOrder":26},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":0,"at":8,"value":"de"},"execOrder":27}];
    var updateTuple19 = doc1.update(update19);
    data1 = clv.string.exec(data1, updateTuple19.toExec);

    var commit12 = [{"type":0,"at":10,"value":"y"}];
    var commitTuple12 = doc1.commit(commit12);
    data1 = clv.string.exec(data1, commitTuple12.toExec);

    var update20 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":0,"at":9,"value":"lol"},"execOrder":28}];
    var updateTuple20 = doc1.update(update20);
    data1 = clv.string.exec(data1, updateTuple20.toExec);

    var update21 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":7,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3,"5":1,"6":1},"invClusterSize":3},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":29}];
    var updateTuple21 = doc1.update(update21);
    data1 = clv.string.exec(data1, updateTuple21.toExec);

    var update22 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":8,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"w"},"execOrder":30}];
    var updateTuple22 = doc1.update(update22);
    data1 = clv.string.exec(data1, updateTuple22.toExec);

  });

  it("Site e6c66350-5380-11e7-9e59-557d0f5b45e8 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":2,"value":"ty"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"ty"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"y"},"execOrder":2},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":3}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"ey"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"ey"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commitTuple2 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update5 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":12,"value":"y"},"execOrder":6},{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"ty"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"w"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"yr"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var commitTuple3 = doc2.redo();
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update8 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":10},{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":2,"value":"ty"},"execOrder":11}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":6,"value":"w"},"execOrder":12}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var update10 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":3,"load":{"type":1,"at":6,"value":"w"},"execOrder":13}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"eer"},"execOrder":14}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"r"},"execOrder":15},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"tqe"},"execOrder":16}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var commit4 = [{"type":0,"at":7,"value":"r"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update13 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":10,"value":"r"},"execOrder":17}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":7,"value":"r"},"execOrder":18}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

    var commit5 = [{"type":0,"at":4,"value":"ry"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var update15 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"r"},"execOrder":19},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":9,"value":"lol"},"execOrder":20}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.string.exec(data2, updateTuple15.toExec);

    var commit6 = [{"type":1,"at":2,"value":"try"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update16 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"ry"},"execOrder":21}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.string.exec(data2, updateTuple16.toExec);

    var update17 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"try"},"execOrder":22}];
    var updateTuple17 = doc2.update(update17);
    data2 = clv.string.exec(data2, updateTuple17.toExec);

    var commit7 = [{"type":0,"at":5,"value":"ytq"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = clv.string.exec(data2, commitTuple7.toExec);

    var update18 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":23},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":1,"at":8,"value":"de"},"execOrder":24}];
    var updateTuple18 = doc2.update(update18);
    data2 = clv.string.exec(data2, updateTuple18.toExec);

    var update19 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"ytq"},"execOrder":25}];
    var updateTuple19 = doc2.update(update19);
    data2 = clv.string.exec(data2, updateTuple19.toExec);

    var update20 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":7,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"ele"},"execOrder":26},{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":0,"at":8,"value":"de"},"execOrder":27}];
    var updateTuple20 = doc2.update(update20);
    data2 = clv.string.exec(data2, updateTuple20.toExec);

    var update21 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":0,"at":9,"value":"lol"},"execOrder":28}];
    var updateTuple21 = doc2.update(update21);
    data2 = clv.string.exec(data2, updateTuple21.toExec);

    var update22 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":7,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3,"5":1,"6":1},"invClusterSize":3},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":29}];
    var updateTuple22 = doc2.update(update22);
    data2 = clv.string.exec(data2, updateTuple22.toExec);

    var update23 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":8,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"w"},"execOrder":30}];
    var updateTuple23 = doc2.update(update23);
    data2 = clv.string.exec(data2, updateTuple23.toExec);

  });

  it("Site e6c7c2e0-5380-11e7-9e59-557d0f5b45e8 operations should be executed without errors", function() {
    var update1 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"ty"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":12,"value":"y"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update2 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"y"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var commit2 = [{"type":0,"at":8,"value":"ey"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var commitTuple3 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple3.toExec);

    var update4 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"ey"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var commitTuple4 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple4.toExec);

    var update5 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"ey"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":12,"value":"y"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"ty"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var commit5 = [{"type":0,"at":4,"value":"yr"}];
    var commitTuple5 = doc3.commit(commit5);
    data3 = clv.string.exec(data3, commitTuple5.toExec);

    var update8 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"w"},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

    var commit6 = [{"type":1,"at":5,"value":" Wo"}];
    var commitTuple6 = doc3.commit(commit6);
    data3 = clv.string.exec(data3, commitTuple6.toExec);

    var update9 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"yr"},"execOrder":9}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":10}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.string.exec(data3, updateTuple10.toExec);

    var update11 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":2,"value":"ty"},"execOrder":11}];
    var updateTuple11 = doc3.update(update11);
    data3 = clv.string.exec(data3, updateTuple11.toExec);

    var update12 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":6,"value":"w"},"execOrder":12}];
    var updateTuple12 = doc3.update(update12);
    data3 = clv.string.exec(data3, updateTuple12.toExec);

    var update13 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":3,"load":{"type":1,"at":6,"value":"w"},"execOrder":13}];
    var updateTuple13 = doc3.update(update13);
    data3 = clv.string.exec(data3, updateTuple13.toExec);

    var commit7 = [{"type":0,"at":2,"value":"r"}];
    var commitTuple7 = doc3.commit(commit7);
    data3 = clv.string.exec(data3, commitTuple7.toExec);

    var update14 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"eer"},"execOrder":14}];
    var updateTuple14 = doc3.update(update14);
    data3 = clv.string.exec(data3, updateTuple14.toExec);

    var update15 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"r"},"execOrder":15}];
    var updateTuple15 = doc3.update(update15);
    data3 = clv.string.exec(data3, updateTuple15.toExec);

    var update16 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"tqe"},"execOrder":16}];
    var updateTuple16 = doc3.update(update16);
    data3 = clv.string.exec(data3, updateTuple16.toExec);

    var update17 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":10,"value":"r"},"execOrder":17}];
    var updateTuple17 = doc3.update(update17);
    data3 = clv.string.exec(data3, updateTuple17.toExec);

    var commitTuple8 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple8.toExec);

    var update18 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":7,"value":"r"},"execOrder":18}];
    var updateTuple18 = doc3.update(update18);
    data3 = clv.string.exec(data3, updateTuple18.toExec);

    var update19 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"r"},"execOrder":19}];
    var updateTuple19 = doc3.update(update19);
    data3 = clv.string.exec(data3, updateTuple19.toExec);

    var update20 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":9,"value":"lol"},"execOrder":20}];
    var updateTuple20 = doc3.update(update20);
    data3 = clv.string.exec(data3, updateTuple20.toExec);

    var update21 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"ry"},"execOrder":21}];
    var updateTuple21 = doc3.update(update21);
    data3 = clv.string.exec(data3, updateTuple21.toExec);

    var commit9 = [{"type":1,"at":3,"value":"r"}];
    var commitTuple9 = doc3.commit(commit9);
    data3 = clv.string.exec(data3, commitTuple9.toExec);

    var update22 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"try"},"execOrder":22}];
    var updateTuple22 = doc3.update(update22);
    data3 = clv.string.exec(data3, updateTuple22.toExec);

    var update23 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":23}];
    var updateTuple23 = doc3.update(update23);
    data3 = clv.string.exec(data3, updateTuple23.toExec);

    var update24 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":1,"at":8,"value":"de"},"execOrder":24}];
    var updateTuple24 = doc3.update(update24);
    data3 = clv.string.exec(data3, updateTuple24.toExec);

    var commit10 = [{"type":1,"at":6,"value":"ele"}];
    var commitTuple10 = doc3.commit(commit10);
    data3 = clv.string.exec(data3, commitTuple10.toExec);

    var update25 = [{"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"ytq"},"execOrder":25}];
    var updateTuple25 = doc3.update(update25);
    data3 = clv.string.exec(data3, updateTuple25.toExec);

    var update26 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":7,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"ele"},"execOrder":26}];
    var updateTuple26 = doc3.update(update26);
    data3 = clv.string.exec(data3, updateTuple26.toExec);

    var update27 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":0,"at":8,"value":"de"},"execOrder":27}];
    var updateTuple27 = doc3.update(update27);
    data3 = clv.string.exec(data3, updateTuple27.toExec);

    var update28 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":0,"at":9,"value":"lol"},"execOrder":28}];
    var updateTuple28 = doc3.update(update28);
    data3 = clv.string.exec(data3, updateTuple28.toExec);

    var commit11 = [{"type":0,"at":9,"value":"w"}];
    var commitTuple11 = doc3.commit(commit11);
    data3 = clv.string.exec(data3, commitTuple11.toExec);

    var update29 = [{"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":7,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3,"5":1,"6":1},"invClusterSize":3},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":29}];
    var updateTuple29 = doc3.update(update29);
    data3 = clv.string.exec(data3, updateTuple29.toExec);

    var update30 = [{"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":8,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"w"},"execOrder":30}];
    var updateTuple30 = doc3.update(update30);
    data3 = clv.string.exec(data3, updateTuple30.toExec);

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

    var serverUpdate0 = {"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"ty"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"y"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"ey"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"ey"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":12,"value":"y"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"ty"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"w"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"yr"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":2,"value":"ty"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":6,"value":"w"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":1,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{},"invClusterSize":0},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":3,"load":{"type":1,"at":6,"value":"w"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"eer"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"r"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"tqe"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":10,"value":"r"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":2,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":7,"value":"r"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"r"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":9,"value":"lol"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":3,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"ry"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":4,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"try"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":1,"at":8,"value":"de"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"e6c66350-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"ytq"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":7,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"ele"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":6,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":0,"at":8,"value":"de"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":5,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":3},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":0,"at":9,"value":"lol"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"e6c44070-5380-11e7-9e59-557d0f5b45e8","seqId":7,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":2},"invClusterSize":1},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3,"5":1,"6":1},"invClusterSize":3},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8","seqId":8,"context":{"vector":{"e6c66350-5380-11e7-9e59-557d0f5b45e8":{"seqId":5,"invCluster":{"1":2},"invClusterSize":1},"e6c7c2e0-5380-11e7-9e59-557d0f5b45e8":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1},"invClusterSize":3},"e6c44070-5380-11e7-9e59-557d0f5b45e8":{"seqId":6,"invCluster":{"1":3,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"w"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
  });

});
