var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - rm/rm/ins/rm/rm/ins/undo/undo/undo/undo/redo/rm/rm/ins/rm/rm/ins/ins/ins/undo/ins/undo/ins/ins/ins/ins/undo/ins/ins/rm - 30-ops-2882add3-7743-41ee-8774-3a5f470180a9", function() {
  var doc1 = new clv.string.Document("41f935a0-5380-11e7-82c7-7b941865593f", 0, null);
  var doc2 = new clv.string.Document("41fb7f90-5380-11e7-82c7-7b941865593f", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"41a222fd-9011-417b-be3f-b601821349d0","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 41f935a0-5380-11e7-82c7-7b941865593f operations should be executed without errors", function() {
    var update1 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":2,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"yre"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commit1 = [{"type":1,"at":4,"value":"orl"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update3 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"tre"},"execOrder":3},{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":14,"value":"qw"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commit2 = [{"type":1,"at":0,"value":"Ht"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update4 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":1,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"orl"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commit3 = [{"type":0,"at":4,"value":"yr"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update5 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":2,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Ht"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"yr"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commit4 = [{"type":1,"at":4,"value":"yr"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var commit5 = [{"type":1,"at":3,"value":"lld"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update7 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":14,"value":"qw"},"execOrder":8},{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"yr"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commit6 = [{"type":0,"at":5,"value":"t"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update8 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"lld"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":6,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var commitTuple7 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var update10 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"ee"},"execOrder":12},{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":6,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"t"},"execOrder":13}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var commitTuple8 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update11 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"ee"},"execOrder":14},{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"lld"},"execOrder":15}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var commitTuple9 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update12 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":6,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"rwq"},"execOrder":16}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var commitTuple10 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var update13 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":7,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"5":1,"6":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"ty"},"execOrder":17},{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"yr"},"execOrder":18}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"yr"},"execOrder":19}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":8,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":7,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":11,"value":"ew"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

    var commitTuple11 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple11.toExec);

    var update16 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":9,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":8,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":17,"value":"rw"},"execOrder":21}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.string.exec(data1, updateTuple16.toExec);

    var update17 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":9,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":17,"value":"rw"},"execOrder":22},{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":4,"value":"yr"},"execOrder":23}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.string.exec(data1, updateTuple17.toExec);

    var commit12 = [{"type":1,"at":3,"value":"ly"}];
    var commitTuple12 = doc1.commit(commit12);
    data1 = clv.string.exec(data1, commitTuple12.toExec);

    var commit13 = [{"type":1,"at":3,"value":"rld"}];
    var commitTuple13 = doc1.commit(commit13);
    data1 = clv.string.exec(data1, commitTuple13.toExec);

    var update18 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":10,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"3":1,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"qr"},"execOrder":24},{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":7,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"ly"},"execOrder":25}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.string.exec(data1, updateTuple18.toExec);

    var update19 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":8,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":7,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"rld"},"execOrder":26}];
    var updateTuple19 = doc1.update(update19);
    data1 = clv.string.exec(data1, updateTuple19.toExec);

    var commit14 = [{"type":0,"at":9,"value":"yer"}];
    var commitTuple14 = doc1.commit(commit14);
    data1 = clv.string.exec(data1, commitTuple14.toExec);

    var update20 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":11,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":10,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":7,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"r"},"execOrder":27},{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":9,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":10,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":8,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"yer"},"execOrder":28}];
    var updateTuple20 = doc1.update(update20);
    data1 = clv.string.exec(data1, updateTuple20.toExec);

    var commit15 = [{"type":1,"at":0,"value":"re"}];
    var commitTuple15 = doc1.commit(commit15);
    data1 = clv.string.exec(data1, commitTuple15.toExec);

    var update21 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":12,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":11,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":8,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"qr"},"execOrder":29}];
    var updateTuple21 = doc1.update(update21);
    data1 = clv.string.exec(data1, updateTuple21.toExec);

    var update22 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":10,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":11,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"re"},"execOrder":30}];
    var updateTuple22 = doc1.update(update22);
    data1 = clv.string.exec(data1, updateTuple22.toExec);

  });

  it("Site 41fb7f90-5380-11e7-82c7-7b941865593f operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":5,"value":" Wo"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var commit2 = [{"type":0,"at":8,"value":"yre"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update1 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var commit3 = [{"type":0,"at":1,"value":"tre"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update2 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":2,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"yre"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var commit4 = [{"type":0,"at":14,"value":"qw"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update3 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"tre"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":14,"value":"qw"},"execOrder":4}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":1,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"orl"},"execOrder":5},{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":2,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Ht"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var commitTuple5 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var update6 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"yr"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":14,"value":"qw"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"yr"},"execOrder":9},{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"lld"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var commit6 = [{"type":0,"at":3,"value":"ee"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update9 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":6,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":11},{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"ee"},"execOrder":12}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var commitTuple7 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple7.toExec);

    var update10 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":6,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"t"},"execOrder":13}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"ee"},"execOrder":14}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var commit8 = [{"type":0,"at":5,"value":"rwq"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = clv.string.exec(data2, commitTuple8.toExec);

    var update12 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"lld"},"execOrder":15}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var commit9 = [{"type":0,"at":12,"value":"ty"}];
    var commitTuple9 = doc2.commit(commit9);
    data2 = clv.string.exec(data2, commitTuple9.toExec);

    var update13 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":6,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"rwq"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":7,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"5":1,"6":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"ty"},"execOrder":17}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"yr"},"execOrder":18}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.string.exec(data2, updateTuple15.toExec);

    var commit10 = [{"type":0,"at":11,"value":"ew"}];
    var commitTuple10 = doc2.commit(commit10);
    data2 = clv.string.exec(data2, commitTuple10.toExec);

    var commit11 = [{"type":0,"at":17,"value":"rw"}];
    var commitTuple11 = doc2.commit(commit11);
    data2 = clv.string.exec(data2, commitTuple11.toExec);

    var update16 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"yr"},"execOrder":19},{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":8,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":7,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":11,"value":"ew"},"execOrder":20}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.string.exec(data2, updateTuple16.toExec);

    var update17 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":9,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":8,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":17,"value":"rw"},"execOrder":21}];
    var updateTuple17 = doc2.update(update17);
    data2 = clv.string.exec(data2, updateTuple17.toExec);

    var commitTuple12 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple12.toExec);

    var commit13 = [{"type":0,"at":10,"value":"qr"}];
    var commitTuple13 = doc2.commit(commit13);
    data2 = clv.string.exec(data2, commitTuple13.toExec);

    var update18 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":9,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":17,"value":"rw"},"execOrder":22}];
    var updateTuple18 = doc2.update(update18);
    data2 = clv.string.exec(data2, updateTuple18.toExec);

    var update19 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":4,"value":"yr"},"execOrder":23},{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":10,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"3":1,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"qr"},"execOrder":24}];
    var updateTuple19 = doc2.update(update19);
    data2 = clv.string.exec(data2, updateTuple19.toExec);

    var update20 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":7,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"ly"},"execOrder":25}];
    var updateTuple20 = doc2.update(update20);
    data2 = clv.string.exec(data2, updateTuple20.toExec);

    var commit14 = [{"type":0,"at":15,"value":"r"}];
    var commitTuple14 = doc2.commit(commit14);
    data2 = clv.string.exec(data2, commitTuple14.toExec);

    var update21 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":8,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":7,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"rld"},"execOrder":26}];
    var updateTuple21 = doc2.update(update21);
    data2 = clv.string.exec(data2, updateTuple21.toExec);

    var update22 = [{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":11,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":10,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":7,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"r"},"execOrder":27}];
    var updateTuple22 = doc2.update(update22);
    data2 = clv.string.exec(data2, updateTuple22.toExec);

    var commit15 = [{"type":1,"at":7,"value":"qr"}];
    var commitTuple15 = doc2.commit(commit15);
    data2 = clv.string.exec(data2, commitTuple15.toExec);

    var update23 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":9,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":10,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":8,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"yer"},"execOrder":28},{"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":12,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":11,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":8,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"qr"},"execOrder":29}];
    var updateTuple23 = doc2.update(update23);
    data2 = clv.string.exec(data2, updateTuple23.toExec);

    var update24 = [{"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":10,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":11,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"re"},"execOrder":30}];
    var updateTuple24 = doc2.update(update24);
    data2 = clv.string.exec(data2, updateTuple24.toExec);

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

    var serverUpdate0 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":2,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"yre"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"tre"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":14,"value":"qw"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":1,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"orl"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":2,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Ht"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"yr"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":14,"value":"qw"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"yr"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"lld"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":6,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"ee"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":6,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"t"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"ee"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":5,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"lld"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":6,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":5,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"rwq"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":7,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"5":1,"6":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"ty"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":4,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"yr"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"yr"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":8,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":7,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":11,"value":"ew"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":9,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":8,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":17,"value":"rw"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":9,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1},"invClusterSize":2},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":17,"value":"rw"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":3,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":4,"invCluster":{},"invClusterSize":0},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":4,"value":"yr"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":10,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"3":1,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"qr"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":7,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":6,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"ly"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":8,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":7,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"rld"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":11,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":10,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":7,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"r"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":9,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":10,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":8,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"yer"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"41fb7f90-5380-11e7-82c7-7b941865593f","seqId":12,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":11,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":8,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"qr"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"41f935a0-5380-11e7-82c7-7b941865593f","seqId":10,"context":{"vector":{"41fb7f90-5380-11e7-82c7-7b941865593f":{"seqId":11,"invCluster":{"4":1,"5":1,"9":1},"invClusterSize":3},"41f935a0-5380-11e7-82c7-7b941865593f":{"seqId":9,"invCluster":{"3":2,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"re"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
